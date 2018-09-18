# A bit manual at the moment:
# 1 => /google/auth/callback
# 2 => .only 1
# 3 =>  Copy + paste additions to ../data/Label_75.js
# 4 => .only 2
# 5 => .only 3 (apply manual clean md)
# 6 => .only 4 (update hard-copy thread list)


module.exports = ->



  IT "label:37 messages list", ->
    @timeout 1000000
    q = { labelIds:'Label_75', maxResults:100 }
    existing = FIXTURE.gmail.labels['75'].msgs.map((m)=>m.id)
    Wrappers.gmail.listMsg q, (e, r) =>
      if !e
        additions = r.filter((m)=>existing.indexOf(m.id)<0)
        $log('existing'.cyan, existing.length,
             'r.raw'.cyan, r.length,
             'additions'.cyan, additions.length)
        $log(item,",") for item in additions
      DONE(e)



  IT "label:37 sync", ->
    @timeout 1000000
    {deletable,labels} = FIXTURE.gmail
    todo = labels['75'].msgs.map((i) => i.id)
                       .filter((id) => deletable.indexOf(id) < 0)
    remaining = todo.length
    $log "queued [#{remaining}] mail downloads",
    worker.queueJob 5, 'sources.importGmail', todo, (e,r) =>
      DONE(e) if e
      DONE() if --remaining is 0



  IT "Delete downloaded deleteable messages", ->
    list = FIXTURE.gmail.deletable.map((name) => {name})
    $log('deletable'.magenta, list.length)
    honey.model.DAL.Source.bulkOperation [], [], list, (e, r) ->
      if r.modifiedCount is 0
        $log('No message left to delete'.yellow)
      else
        expect(r.deletedCount, 'sources removed').to.equal(list.length)
      DONE()


  IT "Set ignore flag", ->
    {ignore} = FIXTURE.gmail
    honey.model.DAL.Source.getManyByQuery {name:{$in:ignore}}, (e,srcs) =>
      ups = srcs.map(({_id})=>assign({_id},{ignore:1}))
      names = srcs.map((s)=>s.name)
      for n in ignore
        $log("gone "+ig) if names.indexOf(n) < 0
      $log('ignore'.gray, ignore.length)
      honey.model.DAL.Source.updateSetBulk ups, (e, r) ->
        $log('update prob'.red) if r.modifiedCount is not ups.length
        DONE()


  IT "Clean mails", ->
    cleaned = require("../data/gmail/cleaned")
    names = _.chunk(Object.keys(cleaned),800)[2]
    honey.model.DAL.Source.getManyByQuery {name:{$in:names}}, (e,r) =>
      # $log('names',names.join(','), r)
      ups = r.map(({_id,name})=>assign({_id},{md:{body:cleaned[name].md}}))

      # $log(_id, cleaned[_id].md)
      honey.model.DAL.Source.bulkOperation [], ups, [], (e,r) ->
        $log('update e', e) if (e)
        $log('update prob'.red) if r.modifiedCount is not ups.length
        $log('ups.length',ups[1217])
        DONE()



  IT "Add new threads", ->
    additions = {}
    threads = require("../data/gmail/threads")
    existing = FIXTURE.gmail.labels['75'].msgs
      .filter( ({threadId}) => !threads[threadId] )
      .forEach ({threadId}) =>
        # console.log('threadId',threadId)
        additions[threadId] = 0 if !additions[threadId]
        additions[threadId]++
    $log('All threads exist already!'.green) if Object.keys(additions).length is 0
    Object.keys(additions).forEach (tId) =>
      $log('add:'.yellow, " thread[{tId}](#{additions[tId]})")
    DONE()



  #   additions = r.filter((m)=>existing.indexOf(m.id)<0)
  #   console.log('r.raw'.cyan, r.length)
  #   # Wrappers.gmail.listMsg q, (e,r) =>
  #     # DONE(e) if e
  #   console.log('additions'.cyan, additions.length)
  #   for item in additions
  #     console.log(item, ',' )
    # Wrappers.gmail.getTheadMsgs todo[6], {}, (e,r) =>
      # for {id,snippet} in r.messages
        # console.log(id,snippet.substr(0,30).gray)
      # DONE(e)
      # existing = FIXTURE.gmail.msgList.map((m)=>m.id)

  ## ? ? ?
  # IT "Check threads", ->
  #   @timeout 80000
  #   threads = {}
  #   {deletable,labels} = FIXTURE.gmail
  #   honey.model.DAL.getManyByQuery {}, {select:'name title data.threadId'}, (e,r) =>
  #     for s in r
  #       {threadId} = s.data
  #       $log('id: ', s.name, ', threadId: ', threadId, ', subject: ', s.title)
  #       if (threads[threadId])
  #         threads[threadId].existing.push(s.name)
  #       else
  #         threads[threadId] = {id:threadId,existing:[s.name],deletable}
  #     count = Object.keys(threads).length
  #     ok = 0
  #     todo = Object.keys(threadProblems)
  #     todo = Object.values(threads)
  #     # console.log('todo', todo, Wrappers.gmail.getTheadMsgs)
  #     worker.queueJob 100, 'sources.importGmailThread', todo, (e,r) =>
  #       $log('thread,e,inserts'.cyan, e) if (!e)
  #
  #         DONE(e)
  #       else
  #         $log('thread,inserts', "[#{++ok}/#{count}]".green, r.length)
          # DONE() if ok is count
