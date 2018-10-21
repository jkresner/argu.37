path                         = require('path')
SCREAM                       = require('screamjs')
Honey                        = require('honeycombjs')

# mock browser
Browser = run: (cfg, done) ->
  global.window =
    toc: FIXTURE.content.ebook.toc
    cache: { templates_cached: require('../../server/logic/templates/_data') }
  done()


opts = {}
SCREAM(opts).run (done) ->
  config = {}
  Browser.run(config, done)
