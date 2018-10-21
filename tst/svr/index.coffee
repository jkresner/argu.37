SCREAM                       = require('screamjs')
Honey                        = require('honeycombjs')
path                         = require('path')


opts =
  # setup:                    { done: require('./setup') }
  # login:
  # logic: 'oauth', url: '/auth/test/login', session: null, status: 200, accept: 'application/json'
    # handler: (data, cb) ->
      # existing = FIXTURE.users[data.key]
      # opts.login.fn.call @, existing, 'facebook', profile, {token:'test'}, (e,r) =>
  #       if r? and !(FIXTURE.users[data.key]or{})._id
  #         FIXTURE.users[data.key] = r
  #       cb(e, r)


SCREAM(opts).run (done) ->
  appDir                     = path.join(__dirname, '/../../server')
  config                     = Honey.Configure(appDir+'/cfg', 'test', true)
  # config.routes.auth.test    = { on:true, login: opts.login }
  app                        = require(path.join(appDir,'web.js'))({config,done})
