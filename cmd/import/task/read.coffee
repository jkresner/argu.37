fs = require("fs")
paths = OPTS.config.paths

module.exports = ->


  before (cb) ->
    cb()


  IT "Import /read", ->
    # $log('OPTS.config.paths.read', paths.read)
    lookup = "module.exports = ["
    
    fs.readdirSync(paths.read)
      .filter((f) => /.png$/.test(f))
      .forEach (f) => 
        lookup += """\n  {
  url: '/cms/read/#{f}',
  time: '#{moment(f.split(""<"")[0].trim(),"YYMMDD")}',
  title: '#{f.split("<")[1].split(">")[0]}' }, """
    
    # console.log('f'.blue, lookup)

    fs.writeFileSync(paths.fixtures+"/read.js", lookup+"]\n")

    DONE()
