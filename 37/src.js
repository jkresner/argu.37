let gmail = require('./gmail'),
    threads = require('./src.thread'),
    ignore = require('./src.ignore'),
    deletable = {}
    deletable0 = {}

gmail.deletable.forEach( name => deletable0[name] = "TBA" )


module.exports =  {

  deletable: assign(deletable0, deletable), 
  
  ignore, 

  threads: assign({}, gmail.threads, threads)

}
