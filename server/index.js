// process.env.ENV    = 'prod'
let env            = process.env.ENV||'dev'
let configure      = require('honeycombjs').Configure
let config         = configure(__dirname+'/cfg', env, true)
// config.http.port   = process.env.PORT || config.http.port


function done(e) {
  console.log(e
    ? 'app  WEB fail: '.red + e.message
    : `${'app'.dim}  WEB `.blue+config.env.cyan.bold+'.env\t\t '.blue
          + `${config.http.host.replace('http://','')}\n`.cyan.dim)

}

let app = require('./web.js')({config,done})


