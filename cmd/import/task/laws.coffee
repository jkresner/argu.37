fs = require("fs")
csv = require("fast-csv")
csv_ops = { objectMode:true, headers:true, ignoreEmpty:true, trim:false }
tagMap = assign(
  { sa:'sa'.yellow,sc:'sc'.yellow,oc:'oc'.yellow,lot:'lot'.yellow,order:'order'.green },
  { def:'def'.blue,offence:'offence'.red,action:'action'.magenta,duty:'duty'.cyan },
  { reg:'reg'.blue,gov:'goc'.yellow,loss:'loss'.magenta,end:'end'.cyan },
  { reg:'builder'.yellow,cc:'cc'.red },  
)

Map = sa:'sa'.yellow,sc:'sc'.yellow,oc:'oc'.yellow,lot:'lot'.yellow,order:'order'.green,def:'def',offence:'offence'.magenta,action:'action'.magenta,duty:'duty'.cyan
existing = {}
tags = null 
paths = OPTS.config.paths

# latest
ROWS = 423 # 188
PRE_COUNT = 0 # 188 
MATCHED_COUNT = 183 # not sure about the odd 5 yet
UPDATES = 0 # 53 
INSERTS = 423 # 
TAG_COUNT = 22
POST_COUNT = 423 # 188 # 428 
SS_COUNT = 308

module.exports = ->

  before (cb) ->
    if global.LAW_IMPORT?
      PRE_COUNT = LAW_IMPORT.PRE_COUNT if LAW_IMPORT.PRE_COUNT?
      POST_COUNT = LAW_IMPORT.POST_COUNT if LAW_IMPORT.POST_COUNT?
    tags = CAL.tags_cached
    expect(Object.keys(CAL.tags_cached).length).to.equal(TAG_COUNT)
    DAL.Law.getManyByQuery {}, (e, r) =>
      for l in r
        existing[l.ttl.replace('CA07','CV07')] = l._id 
        console.log(l.ttl, '\t', l.name.yellow, '\t', l.title)
      expect(r.length).equal(PRE_COUNT)
      cb()


  IT "Import law.cvs", ->
    inserts = []
    updates = []
    add = (c) =>
      i = _.select(c,'of in at name title body')
      i.see = c.see if c.see and c.see.length > 0
      i.is = if i.title.indexOf("(") > -1 then 'SUBSECTION' else 'SECTION'
      i.ttl = if /^S/.test(i.in) then "#{i.of}:#{i.in}(#{i.at})" else "#{i.of}:#{i.at}"
      # $log('i.tags'.magenta, i.ttl, c.tags)
      i.tags = c.tags.split(',').map((t) => _.select(tags[t], '_id short'))
      $log("  #{i.ttl}\t  ".blue, i.tags.map((t)=>"#{tagMap[t.short]||t.short}".dim).join(' ').gray, ' \t', i.title)
      _id = existing[i.ttl]
      # console.log("#{i.of}:#{i.at}".yellow, _id)
      if _id?
        updates.push assign({_id}, i)
      else
        inserts.push i
    upsert = (rows) =>
      expect(rows).to.equal(ROWS)      
      total = rows
      $log("rows(#{rows})  #{OPTS.config.paths.csv_law}".green.dim)
      $log("laws(inserts[#{inserts.length}]) updates[#{updates.length}] from #{OPTS.config.paths.csv_law}".green.dim)
      DAL.Law.bulkOperation inserts, updates, [], (e, r) =>
        expect(e, "#{e}".red).to.be.null
        $log('laws.r'.dim, 'inserts', inserts.length, 'updates', updates.length)
        expect(inserts.length).to.equal(INSERTS)
        expect(r.insertedCount).to.equal(INSERTS)
        expect(updates.length).to.equal(UPDATES) # MATCHED_COUNT)        
        expect(r.modifiedCount).to.equal(UPDATES)
        # $log('laws.ins laws0.csv'.dim, "ok:#{r.n}".green)
        DB.docsByQuery 'law', {of:"PA02"}, (laws) =>
          expect(laws.length).to.equal(35)
          # console.log('laws[20]', laws[20])
          # l = at: '103', is: 'SECTION'
          l = at: '53A(1a)', is: 'SUBSECTION', tags: 2, t1: "sa", t2: "def"
          expect(laws[20].at).equal(l.at)
          expect(laws[20].is).equal(l.is)
          expect(laws[20].tags.length).equal(l.tags)
          expect(laws[20].tags[0].short).equal(l.t1)
          expect(laws[20].tags[1].short).equal(l.t2)
          DONE(e)        
    DB.Collections.laws.find {}, (e, r) =>
      for l in r
        existing["#{l.of}_#{l.ttl}"] = l._id
      csv.fromPath(paths.csv_law, csv_ops)
        .on("data", add)
        .on("end", upsert)


  after (cb) ->
    expect(CAL.laws_cached).to.be.undefined
    CAL.flush('laws')
    CAL.get 'laws_cached', honey.logic.laws.cached.chain, (e,r) =>
      console.log('laws.r', r.length)
      console.log('CAL.laws_cached', Object.keys(CAL.laws_cached), Object.keys(CAL.laws_cached).length)
      expect(Object.keys(CAL.laws_cached).length).to.equal(POST_COUNT)
      console.log('after.laws_cached.ok'.green.dim)
      honey.logic.laws.list.chain {legislation:'Strata Scheme'}, (e1, ss) =>
        # $log('after.laws.list', ss)
        expect(e1, "#{e1}".red).to.be.null
        expect(ss.length).equal(SS_COUNT)
        console.log('ss[1]', ss[1])
        expect(ss[1].of).equal('SM15')
        expect(ss[1].tags.length).equal(2)
        expect(ss[1].tags[0]._id).eqId('5ba3b2a48e32d36ba15ecf12')
        expect(ss[1].tags[0].short).equal('oc')
        expect(ss[1].tags[0].name).equal('Owners Corporation')
        expect(ss[1].tags[0].slug).equal('owners-corporation')
        # expect(ss[90].of).equal('SM15')
        cb()
