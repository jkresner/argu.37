let env            = process.env.ENV||'dev'
let configure      = require('honeycombjs').Configure
let config         = configure(__dirname+'/cfg', env, true)


function done(e) {
  console.log(`\n${'app'}  WEB`.dim, env.cyan.bold+'.env \t       '.dim,
    e ? `ER:    `.red  + e.message: config.http.host.cyan.dim, '\n')
}

let app = require('./web.js')({config,done})
