csv = require("fast-csv")
csv_ops = { objectMode:true, headers:true, ignoreEmpty:true, trim: true }
csv_file = join(__dirname,"../../data/","airtab-clauses.csv")

module.exports = ->


  IT "Pre-import", ->
    {laws} = DB.Collections
    laws.remove {}, () =>
      # expect(r2.length).to.equal(0)
      laws.find({}).toArray (r) =>
        expect(r).to.be.null
        DONE()

  IT "Import csv", ->
    {laws} = DB.Collections
    insert = []
    row = (c) =>
      if (c.in && c.at && c.ttl && c.body)
        i = _.select(c,'in at ttl title body')
        i.at = 's'+i.at if /\d/.test(i.at[0])
        # $log("#{i.in} #{i.at} #{i.ttl} #{i.title}".yellow)
        # $log("#{i.body}".gray)
        insert.push(i)
    eof = () =>
      $log("done.csv".green)
      laws.insert insert, (e,r) =>
       $log("Law.insert[#{insert.length}]".yellow, "#{e|''}".red, r.result.n)
       DONE(e)

    csv.fromPath(csv_file, csv_ops)
      .on("data", row)
      .on("end", eof);
