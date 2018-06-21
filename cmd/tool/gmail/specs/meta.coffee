module.exports = ->


  IT "Messages list", ->
    @timeout 10000
    q = { labelIds:'Label_75', maxResults:1000000 }
    i = 0

    Wrappers.gmail.listMsg q, (e,r) =>
      DONE(e) if e

      existing = FIXTURE.gmail.msgList.map((m)=>m.id)

      console.log('existing'.cyan, existing.length)
      console.log('r.raw'.cyan, r.length)

      additions = r.filter((m)=>existing.indexOf(m.id)<0)
      console.log('additions'.cyan, additions.length)

      for item in additions
        console.log(item, ',' )
      DONE()


  IT "Threads dump", ->
    Wrappers.gmail.listMsg q, (e,r) =>
      DONE(e) if e

      existing = FIXTURE.gmail.msgList.map((m)=>m.id)

      console.log('existing'.cyan, existing.length)
      console.log('r.raw'.cyan, r.length)

      additions = r.filter((m)=>existing.indexOf(m.id)<0)
      console.log('additions'.cyan, additions.length)

      for item in additions
        console.log(item, ',' )
      DONE()



  # IT "", ->
  #   {Source} = honey.model.DAL
  #   toId = honey.logic.DRY.id.parse
  #   sources = FIXTURE.sources
  #   keys = Object.keys(places)
  #   list = []
  #   for key in keys
  #     id = toId(FIXTURE.sources[key]._id)
  #     for id in sources[key]
  #       list.push({_id:toId(id)})
  #   Source.updateSetBulk sources, (e, r0) ->
  #     expect(r0.modifiedCount, 'source updates').to.equal(list.length)
  #     DONE()
