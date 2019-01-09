fs = require("fs")
csv = require("fast-csv")
csv_ops = { objectMode:true, headers:true, ignoreEmpty:true, trim:false }
total = 0
{paths} = OPTS.config
# PRE_COUNT =  
# POST_COUN =

module.exports = ->

  IT "Import authority.csv", ->
    lookup = "module.exports = {\n"
    add = (a) =>
      # $log('a'.magenta, a)
      lookup += "  '#{a.ref}': '#{a.title}',\n"
    upsert = (rows) =>
      fs.writeFileSync(paths.fixtures+"/authority.js", lookup+"}\n")
      DONE()
    csv.fromPath(paths.fixtures+"/_authority.csv", csv_ops)
      .on("data", add)
      .on("end", upsert)

