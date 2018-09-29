// process.env.ENV    = 'prod'
let env            = process.env.ENV||'dev'
let configure      = require('honeycombjs').Configure
let config         = configure(__dirname+'/cfg', env, true)
// config.http.port   = process.env.PORT || config.http.port


function done(e) {
  console.log(e
    ? 'app  WEB fail: '.red + e.message
    : `${'app'.dim}  WEB --env ${config.env} ${'up'.green}\t\t      `.blue + `${config.http.host}`)

}

let app = require('./web.js')({config,done})


