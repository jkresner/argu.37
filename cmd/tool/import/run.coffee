SCREAM             = require('screamjs')
Honey              = require('honeycombjs')
env                = process.env.ENV || 'dev'


OPTS =
  setup:
    done: (cb) =>
      console.log("SCREAM  setup done".cyan)
      cb()


SCREAM(OPTS).run (done) =>
  console.log("IMPORT --mode #{env}".cyan)

  appDir           = join(__dirname, '/../../../server')
  mongoUrl         = OPTS.config.db.mongo.url
  config           = Honey.Configure(appDir, env, true)

  assign(config.model.domain,{mongoUrl})

  # delete config.model.cache
  worker           = Honey.Worker(config, done)
  model            = Honey.Model(config, done)

  model.connect ->
    worker.honey.wire({model})
      # .merge(Honey.Auth)
      .run()
    # global.worker = worker
