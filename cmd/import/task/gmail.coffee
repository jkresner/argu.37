GMAIL = require('../../../37/gmail')
UNIQ = []

# PRE_COUNT=1457
# PRE_COUNT=1541
# PRE_IMPORT_COUNT=1664
# PRE_IMPORT_COUNT=1626
# POST_COUNT=1612
POST_EXPECTED_COUNT=1612

getter = (cb) => 
  DAL.Source.getManyByQuery {render:'gmail'}, (e, r) => 
    cb(e, r)


# 3 => .only 3 (apply manual clean md)
# 6 => .only 4 (update hard-copy thread list)
# saving gmail data to DB
# $log('src.data.gmail_db', data)
# A bit manual at the moment:
module.exports = ->


  before (cb) ->
    for {id} in GMAIL.msgs
      expect(UNIQ.indexOf(id) < 0, "#{id} msg dup").true
      UNIQ.push(id)

    getter (e,r) -> 
      $del = []
      for s in r
        delete s.data
        if UNIQ.indexOf(s.name) < 0
          console.log("{ id: '#{s.name}', threadId: '#{s.threadId}' }".magenta)     
        if GMAIL.deletable.indexOf(s.name) > -1          
          $del.push(s._id)
          console.log('$del', s._id, s.name)     
      DB.removeDocs 'Source', {_id:{$in:$del}}, (e) =>
        # console.log(e)
        cb()


  IT.skip "Step 0 >> /google/auth/call", ->
    # uncomment app.merge(Honey.auth)
    # cmd/run --cmd -v


  # TODO : Store Labels => Tags on Source
  IT "Step 1 >> copy-paste >> gmail.msgs", ->
    @timeout 1000000
    q = { labelIds:'Label_75', maxResults:100 }
    existing = FIXTURE.gmail.msgs.map((m)=>m.id)
    # expect(existing.length).to.equal(PRE_COUNT)
    Wrappers.gmail.listMsg q, (e, r) =>
      if !e
        additions = r.filter((m)=>existing.indexOf(m.id)<0)
        $log('\.existing'.cyan, existing.length,
             'r.raw'.yellow, r.length,
             'additions'.green, additions.length)
        if additions.length > 0
          $log(item,",") for item in additions
          for m in r
            $log("  { id: '#{m.id}', threadId: '#{m.threadId}, labelIds: '#{m.labelIds}' },")        
        expect(additions.length).to.equal(0)
      DONE(e)


  IT "Step 2 >> label:37 sync", ->
    @timeout 1000000
    {deletable,msgs} = FIXTURE.gmail
    CAL.get 'existing', getter, () => 
      # expect(CAL.existing.length).to.equal(PRE_COUNT)

      existing = CAL.existing.map((m)=>m.name)
      existing.forEach (name) => 
        expect(UNIQ.indexOf(name) > -1, "#{name} looks gone from gmail").true


      todo = msgs
        .map((i) => i.id)
        .filter((id) => deletable.indexOf(id) < 0)
        .filter((id) => existing.indexOf(id) < 0)

      $log('FIX.deletable', deletable.length)
      $log('FIX.msgs', msgs.length)    
      $log('FIX.existing', existing.length)          
        
      remaining = todo.length
      if remaining is 0
        DONE()

      # expect(remaining).to.equal(PRE_IMPORT_COUNT-PRE_COUNT)
      $log "queued [#{remaining}] mail msg imports"
      worker.queueJob 5, 'gmail.import', todo, (e,r) =>
        $log "e", e
        DONE(e) if e
        $log "saved", r.name, r._id
        DONE() if --remaining is 0



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



  after (cb) ->
    getter (e, r) =>
      expect(r.length).to.equal(POST_EXPECTED_COUNT) 
      # expect(GMAIL.msgs.length+deletable.length).to.equal(r.length)
      i = 0
      pos = {}
      r.forEach (s) => 
        pos[s.name] = i++ 

      for m in GMAIL.msgs
        p = pos[m.id]
        lb = "{ id: '#{m.id.yellow}', threadId: '#{m.threadId}' }, #{pos[m.id]}"
        if GMAIL.deletable.indexOf(m.id) > -1
          expect(p, lb).to.be.undefined
        else 
          expect(p > -1, lb).to.be.true

      $log('***'.magenta, 'cmd/db import src', '***'.magenta, 'run required!')
      cb()
