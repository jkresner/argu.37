module.exports = -> DESCRIBE "tmpl.encrypt", ->

  {mapcrypt} = require("../../../pl8/fn/encrypt")
  alias = null
  psudo = null
  
  before ->
    {alias,psudo} = global.window.cache['templates_cached']


  DESCRIBE "MAPS", ->

    IT "Spelling", ->
      expect(mapcrypt("aspesdos", alias)).to.equal("Asbestos")
      DONE()


    IT "Spelling case insensitive", ->
      expect(mapcrypt("Aspesdos", alias, psudo)).to.equal("Asbestos")
      DONE()

    IT "Sudo 2", ->
      toExpect = [
        { i: 'Thanks Elizabeth Bateman Hopefully they', o: 'Thanks sMA_e Hopefully they' }
        { i: 'Thanks Elizabeth Hopefully they', o: 'Thanks sMA_e Hopefully they' }
        { i: "Pauline Green Elena Gildina", o: 'SC5 SC3' }
        { i: "e.gildina@gmail.com", o: 'SC3' }
      ]

      pseudo = (input) =>
        mapcrypt(input, alias, psudo)

      for p in toExpect
        # pseudo2()
        # console.log(pseudo(p.i))
        expect(pseudo(p.i), "\n#{p.i.gray}==#{p.o.white}\n").to.equal(p.o)

      DONE()


    IT "Pseudonyms", ->
      enc = (input) => mapcrypt(input, psudo)

      expect(enc(i), "\n#{i.gray}==#{o.white}\n").to.equal(o) for {i,o} in [
        { i: "Jonathon Kresner <jkresner@gmail.com>, David Puterman <david_puterman@yahoo.com.au>, \"Rick O\'Gorman-Hughes\" <rick_ogh@hotmail.com>, Keppelgate Elena Gildina <e.gildina@gmail.com>, Pauline Green <paulinegreen362@hotmail.com>", o: "JK, SC4, SC2, SC3, SC5" }
        { i: "\"Rick O'Gorman Hughes\" <rick_ogh@hotmail.com>, David Puterman <david_puterman@yahoo.com.au>", o: 'SC2, SC4' }
        { i: "\"Rick O'Gorman Hughes\" <rick_ogh@hotmail.com>", o: 'SC2' }
        { i: "\"RICK Richard O'Gorman-Hughes\" <rick_ogh@hotmail.com>", o: 'SC2' }
        { i: "\"'RICK Richard O'Gorman-Hughes'\" <rick_ogh@hotmail.com>", o: 'SC2' }
        { i: "\"Rick O'Gorman Hughes\"", o: 'SC2' }
        { i: "rick_ogh@hotmail.com", o: 'SC2' }
        { i: "Pauline", o: 'SC5' }
        { i: "Pauline Green", o: 'SC5' }
        { i: "P Green <paulinegreen362@hotmail.com>", o: 'SC5' }
        { i: "Pauline Green <paulinegreen362@hotmail.com>", o: 'SC5' }
        { i: "paulinegreen362@hotmail.com", o: 'SC5' }
        { i: "paulinegreen362@hotmail.com <paulinegreen362@hotmail.com>", o: 'SC5' }
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
        { i: 'Thanks Elizabeth Bateman Hopefully they', o: 'Thanks sMA_e Hopefully they' }
        { i: 'Thanks Elizabeth Hopefully they', o: 'Thanks sMA_e Hopefully they' }
        { i: "Pauline Green Elena Gildina", o: 'SC5 SC3' }
        { i: "e.gildina@gmail.com", o: 'SC3' }
      ]

      DONE()
