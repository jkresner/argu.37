module.exports = function(cfg={}, done) {

  let Honey    = require('honeycombjs')
  
  let env      = process.env.ENV||'dev'
  let config   = Honey.Configure(__dirname+'/cfg', env, true)

  var cb = e => console.log('app '.dim, e
    ? 'WORKER fail: '.red + e.message
    : 'WORKER ready:'.green)

  if (!done) done = cb

  let work         = Honey.Worker(config, done)
  let model        = Honey.Model(config, cb)

  model.connect( () =>

    work.honey
      .wire({model})
      .merge(Honey.Auth)
  //  .track()
      .inflate(config.model.cache)
      .run()

  )

  return work

}




