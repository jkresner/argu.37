SCREAM             = require('screamjs')
Honey              = require('honeycombjs')


OPTS =
  setup:
    done: (cb) =>
      $log("SCREAM  setup done")
      global.DAL = honey.model.DAL
      DATA.reset = (model, done) ->
        m = model.toLowerCase()
        CAL.flush(m+'s')
        DB.removeDocs m, {}, () =>
          DB.docsByQuery m, {}, (r) =>
            expect(r.length).to.equal(0)
            expect(CAL[m+'s_cached']).to.be.undefined
            done()
      cb()


SCREAM(OPTS).run (done) =>
  env              = process.env.ENV || 'test'
  console.log("cmd/db --env #{env}".cyan)

  appDir           = join(__dirname, '/../../server')
  mongoUrl         = OPTS.config.db.mongo.url
  config           = Honey.Configure(join(appDir,'cfg'), env, true)

  assign(config.model.domain,{mongoUrl})

  worker           = Honey.Worker(config, done)
  model            = Honey.Model(config, done)

  model.connect () =>

    worker.honey.wire({model})
      # .merge(Honey.Auth)
      .inflate(config.model.cache)
      .run()
    # global.worker = worker
