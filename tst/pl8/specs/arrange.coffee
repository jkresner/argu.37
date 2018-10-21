{linkify} = require("../../../pl8/fn/arrange")
toc = null

module.exports = -> DESCRIBE "chapter md", ->


  before ->
    toc = global.window.toc


  DESCRIBE "linkify (cnt_key => clickable link)", ->

    SKIP "WEB media", ->
      expect(linkify(' [p1](jk) is great', toc, 'w')).to.equal(' [p1](/36/jk) is great')
      expect(linkify(' [p3](jk/) is', toc, 'w')).to.equal(' [p3](jk/) is')
      expect(linkify('[p5](jk) [p5](jk) is six', toc, 'w')).to.equal('[p5](/36/jk) [p5](/36/jk) is six')
      expect(linkify('[p6](jk) [p6](cc) is seven', toc, 'w')).to.equal('[p6](/36/jk) [p6](/nsw-strata/concrete-cancer) is seven')
      DONE()


    SKIP "PRINT media", ->
      expect(linkify(' [p2](jk) is great',toc,'p')).to.equal(' [p2](#c-36-jk) is great')
      expect(linkify(' [p4](jk/) is',toc,'p')).to.equal(' [p4](jk/) is')
      expect(linkify('[p7](lot36) [p7](cc) eight',toc,'p')).to.equal('[p7](#c-36-maintenance) [p7](#c-nsw-strata-concrete-cancer) eight')
      DONE()


  DESCRIBE "layout", ->

    before (cb) ->
      linkify = (key, toc, media) => "#{p}#{key}"
      cb()


    SKIP "WEB chapter"

    SKIP "PRINT chapter"
