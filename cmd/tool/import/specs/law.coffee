csv = require("fast-csv")
csv_ops = { objectMode:true, headers:true, ignoreEmpty:true, trim:false }
# csv_file = join(__dirname,"../../data/","laws.csv")


module.exports = ->


  # acts, regulations, caselaw, by-laws, contracts, articles
  SKIP "Import authorities", ->


  IT "Pre-import (clear collections)", ->
    {laws} = DB.Collections
    laws.remove {}, () =>
      laws.find({}).toArray (r) =>
        expect(r).to.be.null
        DONE()


  IT "Import laws csv", ->
    {laws} = DB.Collections
    items = []
    add = (c) =>
      # if (c.of && c.in && c.at && c.name && c.title && c.body)
      i = _.select(c,'of in at name title body')
      i.see = c.see if c.see
      i.ttl = "#{c.of} #{c.at}"
      $log("#{c.of} #{c.at} \t", c.title.blue)
      items.push(i)
    insert = (rows) =>
      $log("rows(#{rows})  #{OPTS.config.paths.csv_law}".green.dim)
      laws.insert items, (e,r) =>
        $log("Law.insert[#{items.length}]", "#{e|''}".red, "#{r.result.n}".green)
        DONE(e)

    csv.fromPath(OPTS.config.paths.csv_law, csv_ops)
      .on("data", add)
      .on("end", insert)
