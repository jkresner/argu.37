csv = require("fast-csv")
csv_ops = { objectMode:true, headers:true, ignoreEmpty:true, trim:false }


module.exports = ->


#   IT "Pre-import collection  check", ->
#     {laws} = DB.Collections
#     laws.find({}).toArray (r) =>
#       expect(r).to.be.null
#       DONE()


#   IT "Import law.cvs", ->
#     {laws} = DB.Collections
#     items = []
#     add = (c) =>
#       # if (c.of && c.in && c.at && c.name && c.title && c.body)
#       i = _.select(c,'of in at name title body')
#       i.see = c.see if c.see
#       i.ttl = "#{c.of} #{c.at}"
#       $log(" #{c.of}  #{c.at}\t ".cyan.dim, c.title.blue)
#       items.push(i)
#     csv.fromPath(OPTS.config.paths.csv_law, csv_ops)
#       .on("data", add)
#       .on "end", (rows) =>
#         $log("rows(#{rows})  #{OPTS.config.paths.csv_law}".green.dim)
#         laws.insert items, (e,r) =>
#           $log("Law.insert[#{items.length}]", "#{e|''}".red, "#{r.result.n}".green)
#           DONE(e)

# IT "Import law.cvs", ->
#   items = []
#   add = (c) =>
#     i = _.select(c,'of in at name title body')
#     i.see = c.see if c.see and c.see.length > 0
#     i.is = if c.title.indexOf("(") > -1 then 'SUBSECTION' else 'SECTION'
#     i.ttl = "#{c.of}:#{c.at}"
#     # $log('c.tags', c)
#     i.tags = c.tags.split(',').map((t) => _.select(FIXTURE.tag[t], '_id short'))
#     $log("  #{c.of}:#{c.at}\t ".cyan, c.title, i.tags.map((t)=>t.short).join(' ').gray)
#     items.push(i)
#   insert = (rows) =>
#     total = rows
#     $log("rows(#{rows})  #{OPTS.config.paths.csv_law}".green.dim)
#     DB.Collections.laws.insert items, (e, r) =>
#       expect(e, "#{e}".red).to.be.null
#       expect(r.result.n).to.equal(rows)
#       $log('laws.ins laws0.csv'.dim, "ok:#{r.result.n}".green)
#       DB.docsByQuery 'law', {of:"PA02"}, (laws) =>
#         expect(laws.length).to.equal(35)
#         expect(laws[20].is).equal('SECTION')
#         expect(laws[20].tags.length).equal(2)
#         expect(laws[20].tags[0].short).equal("sa")
#         expect(laws[20].tags[1].short).equal("duty")
#         DONE(e)
#   csv.fromPath(OPTS.config.paths.csv_law, csv_ops)
#      .on("data", add)
#      .on("end", insert)
