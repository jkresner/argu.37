module.exports = ->


  IT "Import messageId list", ->
    @timeout 30000
    deletable = FIXTURE.deletable.gmail
    {msgList,importList} = FIXTURE.gmail
    todo = msgList
            .map((i) => i.id)
            .filter((id) => deletable.indexOf(id) < 0)

    remaining = todo.length
    $log 'import', remaining
    worker.queueJob 5, 'sources.importGmail', todo, (e,r) =>
      DONE(e) if e
      DONE() if --remaining is 0



  IT "Check threads", ->
    @timeout 80000
    {Source} = honey.model.DAL
    q = { maxResults:1000123 }
    i = 0
    deletable = FIXTURE.deletable.gmail
    {msgList} = FIXTURE.gmail
    # todo = Object.keys(threadProblems)
    # exists = msgList.map((m) => m.id)

    threads = {}
    Source.getManyByQuery {},{select:'name title data.threadId'}, (e,r) =>
      $log('r', r.length)
      for s in r
        {name,title} = s
        {threadId} = s.data
        $log('id: ', name, ', threadId: ', threadId, ', subject: ', title)
        if (threads[threadId])
          threads[threadId].existing.push(name)
        else
          threads[threadId] = {id:threadId,existing:[name],deletable}

      ok = 0
      count = Object.keys(threads).length
      todo = Object.values(threads)
      # console.log('todo', todo, Wrappers.gmail.getTheadMsgs)
      worker.queueJob 100, 'sources.importGmailThread', todo, (e,r) =>
        if (e)
          $log('thread,e,inserts'.cyan, e)
          DONE(e)
        else
          $log('thread,inserts', "[#{++ok}/#{count}]".green, r.length)
          DONE() if ok is count

    # Wrappers.gmail.getTheadMsgs todo[6], {}, (e,r) =>
      # for {id,snippet} in r.messages
        # console.log(id,snippet.substr(0,30).gray)
      # DONE(e)

      # existing = FIXTURE.gmail.msgList.map((m)=>m.id)

      # additions = r.filter((m)=>existing.indexOf(m.id)<0)
      # console.log('additions'.cyan, additions.length)

      # for item in additions
        # console.log(item, ',' )


  IT.only "Delete messageId list", ->
    deletable = FIXTURE.deletable.gmail
    $log('deletable'.magenta, deletable.length)
    list = deletable.map((name) => {name})
    honey.model.DAL.Source.bulkOperation [], [], list, (e, r) ->
      expect(r.deletedCount, 'sources removed').to.equal(0) #list.length)
      DONE()

