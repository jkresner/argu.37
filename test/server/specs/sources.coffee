module.exports = ->

  DESCRIBE "Project", ->

    IT "typed_gmail", ->
      {typed_gmail} = honey.projector.sources.Project

      m1 = typed_gmail(FIXTURE.clone('sources.renofoorplan'))
      expect(m1.gmail.attached.length).to.equal(1)
      expect(m1.gmail.attached[0].file).to.equal('IMG_4587.PNG')

      # console.log('m', m1.gmail.attached)

      m = typed_gmail(FIXTURE.clone('sources.asbes'))
      expect(m.gmail.attached.length).to.equal(1)
      expect(m.gmail.attached[0].file).to.equal('R13314 - Testing of Suspected ACM.pdf')

      m = typed_gmail(FIXTURE.clone('sources.contUpd'))
      expect(m.gmail.attached.length).to.equal(0)
      expect(m.md).to.exist
      expect(m.md.raw).to.exist
      # expect(m.gmail.md.raw).to.exist
      # expect(m.gmail.md.body).to.exist

      m = typed_gmail(FIXTURE.clone('sources.pdfSpace'))
      expect(m.gmail.attached.length).to.equal(1)
      expect(m.gmail.attached[0].file).to.equal("PRO0053 1058.pdf")
      expect(m.md).to.exist
      expect(m.md.raw).to.exist

      DONE()


  DESCRIBE "Psudo", ->

    IT "Nyms", ->
      {pseudo,pseudo2} = honey.projector.sources.Project
      toExpect = [
        { i: 'From: Mary Atkinson maryatkinson@optusnet.com.au 20 Feb To: Keppelgate Elena Gildina e.gildina@gmail.com', o: 'From: SC1 20 Feb To: SC3' }
        { i: 'Thanks Elizabeth Bateman Hopefully they', o: 'Thanks  <i>Robin</i> Hopefully they' }
        { i: 'Thanks Elizabeth Hopefully they', o: 'Thanks  <i>Robin</i> Hopefully they' }
        { i: "Pauline Green Elena Gildina", o: ' <i>SC5</i>  <i>SC3</i>' }
        { i: "e.gildina@gmail.com", o: 'SC3' }
        { i: "Jonathon Kresner <jkresner@gmail.com>, David Puterman <david_puterman@yahoo.com.au>, \"Rick O\'Gorman-Hughes\" <rick_ogh@hotmail.com>, Keppelgate Elena Gildina <e.gildina@gmail.com>, Pauline Green <paulinegreen362@hotmail.com>", o: "JK, SC4, SC2, SC3, SC5" }
        { i: "\"Rick O'Gorman Hughes\" <rick_ogh@hotmail.com>, David Puterman <david_puterman@yahoo.com.au>", o: 'SC2, SC4' }
        { i: "\"Rick O'Gorman Hughes\" <rick_ogh@hotmail.com>", o: 'SC2' }
        { i: "\"RICK Richard O'Gorman-Hughes\" <rick_ogh@hotmail.com>", o: 'SC2' }
        { i: "\"'RICK Richard O'Gorman-Hughes'\" <rick_ogh@hotmail.com>", o: 'SC2' }
        { i: "\"Rick O'Gorman Hughes\"", o: 'SC2' }
        { i: "rick_ogh@hotmail.com", o: 'SC2' }
        { i: "Keppelgate Elena Gildina <e.gildina@gmail.com>", o: 'SC3' }
        { i: "John O’Neill <admin@oneillstrata.com>", o: "sMA_j" }
        { i: "Peter Damiano <Peter.Damiano@arabuilding.com.au>", o: "Bldr1" }
        { i: "\"info@arabuilding.com.au\" <info@arabuilding.com.au>", o: "ARA" }
        { i: "\"bmoisidis@bellmont.net\" <bmoisidis@bellmont.net>", o: "Eng1" }
        { i: "\"'Bill  Moisidis'\" <bmoisidis@bellmont.net>", o: "Eng1" }
        { i: "Bill Moisidis <bmoisidis@bellmont.net>", o: "Eng1" }
        { i: "\"david_puterman@yahoo.com.au\" <david_puterman@yahoo.com.au>", o: "SC4" }
        { i: "robert mcgrath <rmcgrath45@gmail.com>", o: 'Bldr3' }
        { i: "jkresner@gmail.com", o: "JK" }
        { i: "JKRESNER@gmail.com", o: "JK" }
        { i: "\"'Laurie Kresner'\" <krezprop@bigpond.net.au>", o: "LK" }
        { i: "\"Carmel Cohen (kresgrp@bigpond.net.au)\" <kresgrp@bigpond.net.au>", o: 'LK_sec' }
        { i: "Carmel Cohen <ccohen@advantagedcare.com.au>", o: 'LK_sec' }
        { i: "Carmel Cohen <kresgrp@bigpond.net.au>", o: 'LK_sec' }
        { i: "Admin Property Inspectors <admin@tpi.com.au>", o: "propInspect" }
        { i: "Jonathon Kresner <jkresner@gmail.com> Linda Kightley <Linda.Kightley@svha.org.au>", o: 'JK StVincents_Microbio' }
      ]
      expect(toExpect.length > 1, toExpect).true
      for p in toExpect
        expect(pseudo2(pseudo(p.i)), p.i + '==' + p.o.white).to.equal(p.o)
      DONE()



  DESCRIBE "Gmail", ->

    IT "/sets/mail-all", ->
      honey.logic.sources.listGmail.chain (e,r) =>
        DONE(e) if e
        # console.log 'r.messages'.green, r.messages.length
        # console.log 'r.set'.green, r.set.length
        for m in r.set
          expect(m.threadSwap).to.be.true if m.name is '14dac23c786b1de9'
          expect(m.hasOwnProperty('threadId')).to.be.true if m.name is '14dac23c786b1de9'

          expect(m.between, "[#{m.id}] #{m.between}").to.exist
          if /(@|'|")/.test(m.between)
            console.log 'btw', m.between.dim, (m.orig||{}).to||'set', ((m.orig||{}).cc||'orig').gray
          expect(m.subject, "[#{m._id}].subject #{m.subject}").to.exist
          expect(m.time, "[#{m._id}].time #{m.time}").to.exist
          # if m.name == '16265efda265bc88'
            # console.log 'm.md'.green, m.subject # , m.orig.to
          # if (m.md)
            # console.log 'm.md'.green, m.subject
          # else
            # console.log 'm.md'.red, m.subject, m.body
          expect(m.raw, "[#{m.name}].raw [#{m.subject}.white] #{m.orig||''}").to.exist
        DONE()


    IT "/sets/mail-all?mode=thread", ->
      honey.logic.sources.listGmail.chain {mode:'thread'}, (e,r) =>
        DONE(e) if e
        for {name,threadSwap} in r.set
          expect(threadSwap).to.be.true if name is '14f7e044b5c1a7ff'
          expect(threadSwap).to.be.undefined if name is '14f814a6039bb1eb'
          expect(threadSwap).to.be.undefined if name is '14f814cb7b5b1dda'
          expect(threadSwap).to.be.true if name is '14dac23c786b1de9'
          expect(threadSwap).to.be.undefined if name is '14f814a6039bb1eb'
        DONE()


    IT "/sets/mail-all?mode=thread&newest=1", ->
      honey.logic.sources.listGmail.chain {mode:'thread',newest:'1'}, (e,r) =>
        DONE(e) if e
        # console.log 'r.messages'.green, r.messages.length
        # console.log 'r.set'.green, r.set.length
        for m in r.set
          {threadSwap,name} = m
          expect(threadSwap).to.be.true if name is '163147bdc408533d'
          # expect(m.hasOwnProperty('threadId')).to.be.false if name is '163147bdc408533d'
          expect(m.hasOwnProperty('threadId')).to.be.true if name is '163147bdc408533d'
          expect(threadSwap).to.be.undefined if name is '16309c7d03a33ab7'
          expect(m.hasOwnProperty('threadId')).to.be.true if name is '16309c7d03a33ab7'
          expect(threadSwap).to.be.undefined if name is '162ad2afb92d52e2'
          # expect(m.hasOwnProperty('threadId')).to.be.true if name is '162ad2afb92d52e2'
          expect(m.hasOwnProperty('threadId')).to.be.true if name is '162ad2afb92d52e2'

          expect(m.between, "[#{m.id}] #{m.between}").to.exist
          if /(@|'|")/.test(m.between)
            console.log 'btw', m.between.dim, (m.orig||{}).to||'set', ((m.orig||{}).cc||'orig').gray
          expect(m.subject, "[#{m._id}].subject #{m.subject}").to.exist
          expect(m.time, "[#{m._id}].time #{m.time}").to.exist
          # if (m.md)
            # console.log 'm.md'.green, m.subject, m.md!=''
          # else
            # console.log 'm.md'.red, m.subject, m.orig
          expect(m.raw, "[#{m.name}].md.raw #{m.subject} #{m.orig||''}").to.exist
        DONE()
