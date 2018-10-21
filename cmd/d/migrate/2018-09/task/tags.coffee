before (DONE) ->
  DATA.reset 'tag', DONE


IT "tags.init FIXTURE.tag._init", ->
  {_init} = FIXTURE.tag
  DB.Collections.tags.insert _init, (e, r) =>
    $log(e) if e
    expect(e).to.be.null
    expect(r.insertedCount).equal(_init.length)
    $log('inserted.tag.ok'.green, r.insertedCount)
    DONE()


after (DONE) ->
  CAL.get 'tags_cached', honey.logic.tags.cached.chain, (e, hash) =>
    expect(Object.keys(CAL.tags_cached).length).to.equal(FIXTURE.tag._init.length)
    DONE()
