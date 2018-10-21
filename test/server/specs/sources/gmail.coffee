

IT "/sources/mail-all", ->
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


IT "/sources/mail-all?mode=thread", ->
  honey.logic.sources.listGmail.chain {mode:'thread'}, (e,r) =>
    DONE(e) if e
    for {name,threadSwap} in r.set
      expect(threadSwap).to.be.true if name is '14f7e044b5c1a7ff'
      expect(threadSwap).to.be.undefined if name is '14f814a6039bb1eb'
      expect(threadSwap).to.be.undefined if name is '14f814cb7b5b1dda'
      expect(threadSwap).to.be.true if name is '14dac23c786b1de9'
      expect(threadSwap).to.be.undefined if name is '14f814a6039bb1eb'
    DONE()


IT "/sources/mail-all?mode=thread&newest=1", ->
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

