csv = require("fast-csv")
csv_ops = { objectMode:true, headers:true, ignoreEmpty:true, trim:false }
existing = {}
total = 0
tags = null 
# tags['TMP'] = { short: 'TEMPORARY' }

module.exports = ->


  before (cb) ->
    tags = CAL.tags_cached
    DAL.Law.getManyByQuery {}, (e, r) =>
      # $log l._id, l.title for l in r
      expect(r.length).equal(188)
      cb()


  IT "Import law.cvs", ->
    inserts = []
    updates = []
    add = (c) =>
      i = _.select(c,'of in at name title body')
      i.see = c.see if c.see and c.see.length > 0
      i.is = if c.title.indexOf("(") > -1 then 'SUBSECTION' else 'SECTION'
      i.ttl = "#{c.of}:#{c.at}"
      $log('i.tags'.magenta, c.tags)
      i.tags = c.tags.split(',').map((t) => _.select(tags[t], '_id short'))
      $log("  #{c.of}:#{c.at}\t ".cyan, c.title, i.tags.map((t)=>t.short).join(' ').gray)
      if (existing["#{i.of}_#{i.ttl}"])
        _id = existing["#{i.of}_#{i.ttl}"]
        updates.push assign({_id}, i)
      else
        inserts.push i
    upsert = (rows) =>
      total = rows
      $log("rows(#{rows})  #{OPTS.config.paths.csv_law}".green.dim)
      DAL.Law.bulkOperation inserts, updates, [], (e, r) =>
        expect(e, "#{e}".red).to.be.null
        $log('laws.r'.dim, r.n, 'inserts', inserts.length, 'updates', updates.length)
        expect(r.n).to.equal(rows)
        # $log('laws.ins laws0.csv'.dim, "ok:#{r.n}".green)
        DONE(e)
        # DB.docsByQuery 'law', {of:"PA02"}, (laws) =>
    #         expect(laws.length).to.equal(35)
    #         expect(laws[20].is).equal('SECTION')
    #         expect(laws[20].tags.length).equal(2)
    #         expect(laws[20].tags[0].short).equal("sa")
    #         expect(laws[20].tags[1].short).equal("duty")
    DB.Collections.laws.find {}, (e, r) =>
      for l in r
        existing["#{l.of}_#{l.ttl}"] = l._id
      csv.fromPath(OPTS.config.paths.csv_law, csv_ops)
        .on("data", add)
        .on("end", upsert)
