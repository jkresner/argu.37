const env          = process.env.ENV || 'dev'
const Honey        = require('honeycombjs')
let config         = Honey.Configure(__dirname, env, true)
config.log.it.modl.connect = 'magenta'


function ready(e)   {

  console.log(e
    ? `app  WORKER fail: `.red + e.message
    : `${'app'.dim}  WORKER ${'ready'.green}\t\t      `.magenta)

}


const worker = Honey.Worker(config, ready)
const model  = Honey.Model(config, x => {})


model.connect( () =>

  worker.honey.wire({model})
              .merge(Honey.Auth)
              // .track()
              .inflate(config.model.cache)
              .run()

)
