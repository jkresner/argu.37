csv = require("fast-csv")
csv_ops = { objectMode:true, headers:true, ignoreEmpty:true, trim:false }
total = 0
tagMap = sa:'sa'.yellow,sc:'sc'.yellow,oc:'oc'.yellow,lot:'lot'.yellow,order:'order'.green,def:'def',offence:'offence'.magenta,action:'action'.magenta,duty:'duty'.cyan


before (DONE) ->
  DATA.reset 'law', DONE


IT "Import law.cvs", ->
  items = []
  add = (c) =>
    i = _.select(c,'of in at name title body')
    i.see = c.see if c.see and c.see.length > 0
    i.is = if c.title.indexOf("(") > -1 then 'SUBSECTION' else 'SECTION'
    i.ttl = "#{c.of}:#{c.at}"
    # $log('c.tags', c)
    i.tags = c.tags.split(',').map((t) => _.select(FIXTURE.tag[t], '_id short'))
    $log("  #{c.of}:#{c.at}\t  ".blue, i.tags.map((t)=>"#{tagMap[t.short]||t.short}".dim).join(' ').gray, ' \t', c.title)
    items.push(i)
  insert = (rows) =>
    total = rows
    $log("rows(#{rows})  #{OPTS.config.paths.csv_law}".green.dim)
    DB.Collections.laws.insert items, (e, r) =>
      expect(e, "#{e}".red).to.be.null
      expect(r.result.n).to.equal(rows)
      $log('laws.ins laws0.csv'.dim, "ok:#{r.result.n}".green)
      DB.docsByQuery 'law', {of:"PA02"}, (laws) =>
        expect(laws.length).to.equal(35)
        expect(laws[20].is).equal('SECTION')
        expect(laws[20].tags.length).equal(2)
        expect(laws[20].tags[0].short).equal("sa")
        expect(laws[20].tags[1].short).equal("duty")
        DONE(e)
  csv.fromPath(OPTS.config.paths.csv_law, csv_ops)
     .on("data", add)
     .on("end", insert)


after (DONE) ->
  CAL.get 'laws_cached', honey.logic.laws.cached.chain, (e,r) =>
    expect(Object.keys(CAL.laws_cached).length).to.equal(total)

  honey.logic.laws.list.chain {legislation:'Strata Scheme'}, (e1, ss) =>
    expect(e1, "#{e1}".red).to.be.null
    expect(ss.length).equal(93)
    # console.log('ss[1]', ss[1])
    expect(ss[1].of).equal('SM15')
    expect(ss[1].tags.length).equal(1)
    expect(ss[1].tags[0]._id).eqId('5ba3b2a48e32d36ba15ecf18')
    expect(ss[1].tags[0].short).equal('def')
    expect(ss[1].tags[0].name).equal('Legal definition')
    expect(ss[1].tags[0].slug).equal('legal-definition')
    # expect(ss[1].tags.length).equal(2)
    # expect(ss[1].tags[1]._id).eqId('5ba3b2a48e32d36ba15ecf17')
    # expect(ss[1].tags[1].short).equal('duty')
    # expect(ss[1].tags[1].name).equal('Legal duty')
    # expect(ss[1].tags[1].slug).equal('legal-duty')
    # expect(ss[1].tags[0].name).equal('Owners Corporation')
    expect(ss[90].of).equal('SM15')
    DONE()
