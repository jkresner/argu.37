fs = require("fs")
INBOX0 = require('../../../37/2018-09/inbox.0')
INBOX1 = require('../../../37/2019-01/inbox.1')
EDITS = assign(INBOX0, INBOX1)  
{paths} = OPTS.config


# PRE_RUN_COUNT = 1630 # ? until end of Sep 2018
PRE_RUN_COUNT = 1629
# PRE_RUN_COUNT = 1578
POST_RUN_COUNT = PRE_RUN_COUNT


# EXISTING=1564
getter = (cb) => 
  DAL.Source.getManyByQuery {}, (e, r) => 
    # r.forEach((m)=> delete m.data)
    cb(e, r)


module.exports = ->

  before (cb) ->
    threadIds = Object.keys(FIXTURE.src.threads)
    CAL.get 'srcs', getter, () => 
      expect(CAL.srcs.length).to.equal(PRE_RUN_COUNT)
      for s in CAL.srcs
        expect(s.uri).to.exist
        expect(s.name).to.exist
        expect(s.threadId).to.exist
        # expect(threadIds.indexOf(s.threadId) > -1, 
        #   $log("'#{s.threadId}': { t:'YYDD:[]#{s.title}'}")).to.be.true
        # expect(s.ignore).to.be.null
      cb()


  IT "Update thread lookup", ->
    additions = {}
    getter (e, existing) =>
      threads = FIXTURE.src.threads
      existing
        .filter( ({threadId}) => !threads[threadId] )
        .sort( (m) => m.published )
        .forEach (m) =>
          additions[m.threadId] = additions[m.threadId] || []
          additions[m.threadId].push(m)      
      # console.log('threadId',threadId)
      if Object.keys(additions).length is 0
        $log('All threads exist already!'.green)
      else 
        $log('Add'.yellow, Object.keys(additions).length)
        Object.keys(additions).forEach (tId) =>
          thread = additions[tId]
          first = additions[tId][0]
          $log(" '#{tId}': { t:'YYDD:[#{thread.length}:dd]#{first.title}'},")
      DONE()


  IT "Delete deleteable src", ->
    # $log('del'.magenta, FIXTURE.src)
    list = Object.keys(FIXTURE.src.deletable).map((name) => {name})
    $log('deletable'.magenta, list.length)
    DAL.Source.bulkOperation [], [], list, (e, r) ->
      if r.modifiedCount is 0
        $log('No message left to delete'.yellow)
      else
        expect(r.deletedCount, 'sources removed').to.equal(list.length)
      DONE()


  IT "Update ignore lookup", ->
    ig = "module.exports = {"
    ups = []
    names = []
    $in = Object.keys(FIXTURE.src.ignore)
    DAL.Source.getManyByQuery {name:{$in}}, (e,srcs) =>      
      # $log('srcs[0]',srcs[0])
      srcs.forEach ({_id,name,title}) =>
        ig += "\n  '#{name}': '#{FIXTURE.src.ignore[name]}',  // #{title}"
        ups.push assign({_id,name},{ ignore:FIXTURE.src.ignore[name]})
        names.push(name)
      for n in $in
        $log("gone "+n) if names.indexOf(n) < 0
      $log('ignore'.gray, $in.length)
      honey.model.DAL.Source.updateSetBulk ups, (e, r) ->
        $log('update prob'.red, e) if e
        $log('update prob'.red) if r.modifiedCount is not ups.length
        fs.writeFileSync(paths.fixtures+"/src.ignore.js", ig+"\n}")
        DONE()


  IT "Update scrubs", ->
    ups = []
    todo = 0
    for m in CAL.srcs
      edit = EDITS[m.name]
      mdcurrent = (m.md||{}).body
      # $log('m', m.name, 'edit', edit?, 'mcurrent', mdcurrent?)
      if !mdcurrent? or mdcurrent is '' and (edit||{}).md == mdcurrent
        if !mdcurrent
          $log("#{todo++} [#{m._id}] #{m.name} edit:#{edit} needing md.body".green.dim, (m.data||{}).snippet)
      if edit?  
        up = {_id:m._id }
        up.weight = edit.weight || 5
        up.ignore = edit.ignore if edit.ignore?
        up.url = edit.uri if edit.uri?
        up.md = assign({}, m.md||{})
        up.md.body = edit.md if edit.md? and edit.md != ''
        up.title = edit.subject if edit.subject?
        up.threadId = edit.theadId if edit.threadId?
        if edit.a?
          for key of edit.a
            up.md[key] = edit.a[key]
        ups.push up
    $log('srubs'.red, ups.length, 'need attention:'.yellow, todo)
    honey.model.DAL.Source.updateSetBulk ups, (e, r) ->
      $log('update prob'.red, e) if e
      $log('update prob'.red, r) if r.modifiedCount is not ups.length
      DONE()


    # // $log(` ${m.name} `.yellow, up.d == 1)
    # // if (up.d == 1) //&& up.md && up.md != '')
    # // assign(m,{skip:true})

    # if (up.from)    m.gmail.from = up.from
    # if (up.subject) m.gmail.subject = up.subject
    # if (up.md!='')  m.md.body = up.md


  after (cb) ->
    getter (e, r) => 
      expect(r.length).to.equal(POST_RUN_COUNT)
      for s in r
        expect(s.threadId).to.exist
      cb()
