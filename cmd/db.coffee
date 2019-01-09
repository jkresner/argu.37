path               = require('path')
SCREAM             = require('screamjs')
Honey              = require('honeycombjs')
Worker             = require(path.join(__dirname,'..','server','worker'))
process.env.ENV    = 'cmd'

OPTS =
  setup:
    done: (cb) =>
      console.log "db\t\t"+"--env #{process.env.ENV.yellow}\n".dim
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
  global.worker = Worker({}, done)
