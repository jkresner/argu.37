module.exports = ->

#   before (cb) ->
#     DATA.reset 'tag', cb

#   IT "Import latest", ->
#     hash = {}, idx = {}, tags = {}
#     for key of FIXTURE.tag
#       tags.push(FIXTURE.tag[key]) if key != '_init'
    
#     DB.ensureDocs 'tag', tags, (e) =>
#       Tag.getManyByQuery {}, Opts.cached, (e,r) => 
#         expect(r.length).to.equal(Object.keys(FIXTURE.tag).lenght-1)
#         r.forEach (t) => 
#           idx[t._id] = t
#           hash[t.short] = _.select(t, '_id name short slug') 

#         CAL['tagIdx'] = idx
#         CAL['tags'] = hash
#         DONE()


  before (DONE) ->
    DATA.reset 'tag', DONE


  IT "tags.init FIXTURE.tag._init", ->
    {_init} = FIXTURE.tags
    DB.Collections.tags.insert _init, (e, r) =>
      $log(e) if e
      expect(e).to.be.null
      expect(r.insertedCount).equal(_init.length)
      $log('inserted.tag.ok'.green, r.insertedCount)
      DONE()


  after (DONE) ->
    CAL.get 'tags_cached', honey.logic.tags.cached.chain, (e, hash) =>
      expect(Object.keys(CAL.tags_cached).length).to.equal(FIXTURE.tags._init.length)
      DONE()
