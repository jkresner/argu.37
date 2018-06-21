SCREAM             = require('screamjs')
Honey              = require('honeycombjs')


OPTS =
  setup:
    done: (cb) ->
      console.log("SCREAM  setup done".green.dim)
      cb()


SCREAM(OPTS).run (done) ->

  env              = process.env.ENV || 'dev'
  console.log("GMAIL --mode #{env}")
  appDir           = join(__dirname, '/../../../server')
  config           = Honey.Configure(appDir, env, true)
  config.model.domain.mongoUrl = OPTS.config.db.mongo.url

  # delete config.model.cache
  worker           = Honey.Worker(config, done)
  model            = Honey.Model(config, done)

  model.connect ->
    worker.honey.wire({model})
      # .merge(Honey.Auth)
      .run()
    global.worker = worker

