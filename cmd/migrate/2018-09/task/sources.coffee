PRE_MIGRATE_COUNT = 1357 # ? until end of Sep 2018
# ? POST_MIGRATE_COUNT = 1564 


DESCRIBE "PRE_MIGRATE", ->

  before (DONE) ->
    DB.docsByQuery 'sources', {}, (r) =>
      expect(r.length).to.equal(PRE_MIGRATE_COUNT)
      DONE()

  SKIP "import.gmail before migrate", ->
    DB.docsByQuery 'sources', {name:'16616c84c64aece3'}, (r) =>
      expect(r.length).to.equal(1)
      cleanup = {$unset:{tags:1,laws:1,notation:1}}
      DB.Collections.sources.updateMany {}, cleanup, (e,r) =>
        DONE()

  IT "Update cleaned gmails", ->
    {cleaned} = FIXTURE.source
    [part1,part2] = _.chunk(Object.keys(cleaned),700)
    upByNames = ($in, cb) ->
      DAL.Source.getManyByQuery name:{$in}, (e,r) =>
        ups = r.map(({_id,name})=>assign({_id},{md:{body:cleaned[name].md}}))
        DAL.Source.bulkOperation [], ups, [], (e,r) ->
          $log('update e', e) if (e)
          $log('update prob'.red) if r.modifiedCount is not ups.length
          $log('sources.up gmail.md'.dim, "ok:#{ups.length}".green)
          cb()
    upByNames(part1, -> upByNames(part2, -> DONE()))


DESCRIBE "SCHEMA Update", ->


  IT "attr :: ignore", ->
    $in = FIXTURE.source.ignore
    DAL.Source.getManyByQuery {name:{$in}}, select:'_id', (e,ups) =>
      ups.forEach (i) => i.ignore = 1
      # $log('ups', ups)
      DAL.Source.bulkOperation [], ups, [], (e,r) ->
        $log( 'source.ups.err'.red, e or r) if e? # or r.modifiedCount is not FIXTURE.source.ignore.length
        $log(('source.ups('+"#{r.modifiedCount}".green+')').dim)
        DONE()


  IT "attrs :: type:>render,is:'comm' :: threadId", ->
    DB.Collections.sources.updateMany {},{$rename:{'type':'render'}}, (e,r) =>
      DAL.Source.getManyByQuery {}, (e,r) =>
        ups = r.map ({_id,data}) => {_id,'is':'comm',threadId:data.threadId}
        DAL.Source.bulkOperation [], ups, [], (e,r) ->
          $log('sources.up.err'.red, e or r) if e? or r.modifiedCount is not PRE_MIGRATE_COUNT
          $log('sources.up threadId'.dim, "ok:#{ups.length}".green)
          DONE()





DESCRIBE "New render types", ->


  IT "Insert docs and imgs", ->
    ins = []
    for fixed in FIXTURE.source.init
      tags = fixed.tags.map((short)=>assign({short},_id:CAL['tags_cached'][short]._id))
      laws = fixed.laws.map((ttl)=>assign({ttl},_id:CAL['laws_cached'][ttl]._id))
      s = assign {}, fixed, {tags,laws}
      delete s.data.threadId
      ins.push(s)
    DAL.Source.bulkOperation ins, [], [], (e,r) ->
        $log('insert e', e) if (e)
        $log('insert prob'.red) if r.insertedCount is not ins.length
        $log('sources.ins docs/imgs'.dim, "ok:#{ins.length}".green)
        DONE()


  after (DONE) ->
    newCount = PRE_MIGRATE_COUNT+Object.keys(FIXTURE.source.init).length
    DB.docsByQuery 'sources', {}, (r) =>
      expect(r.length).to.equal(newCount)
      for s in r
        console.log('s'.yellow, s._id, s.tags)
        expect(s.threadId?).true
        expect(s.tags[0]._id, "#{s._id} no tags?").bsonId() if s.tags?
        expect(s.laws[0]._id).bsonId() if s.laws?
      DONE()
