SCREAM                       = require('screamjs')
Honey                        = require('honeycombjs')
marked                       = require('marked')
templates_cached             = require('../../37/maps')


# mock browser
Browser = run: (cfg, done) ->
  global.marked = marked
  global.window =
    toc: FIXTURE.content.ebook.toc
    cache: { templates_cached }
  done()


opts = {}
SCREAM(opts).run (done) ->
  config = {}
  Browser.run(config, done)
