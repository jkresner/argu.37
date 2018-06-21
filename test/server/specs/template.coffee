linkify = null


module.exports = ->

  DESCRIBE "Helpers", ->


    before ->
      linkify = require("../../../template/helper/format").linkify


    DESCRIBE "Chapters", ->

      IT "linkify web", ->
        expect(linkify(' [p1](jk) is great')).to.equal(' [p1](/36/jk) is great')
        expect(linkify(' [p3](jk/) is')).to.equal(' [p3](jk/) is')
        expect(linkify('[p5](jk) [p5](jk) is six')).to.equal('[p5](/36/jk) [p5](/36/jk) is six')
        expect(linkify('[p6](jk) [p6](cc) is seven')).to.equal('[p6](/36/jk) [p6](/nsw-strata/concrete-cancer) is seven')
        DONE()

      IT "linkify print", ->
        expect(linkify(' [p2](jk) is great','p')).to.equal(' [p2](#c-36-jk) is great')
        expect(linkify(' [p4](jk/) is','p')).to.equal(' [p4](jk/) is')
        expect(linkify('[p7](lot36) [p7](cc) eight','p')).to.equal('[p7](#c-36-maintenance) [p7](#c-nsw-strata-concrete-cancer) eight')
        DONE()
