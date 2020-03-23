fs = require("fs")
paths = OPTS.config.paths

module.exports = ->

  IT "Resolve tags", ->
    ups = []
    DAL.Content.getManyByQuery { tags: {$type:'string'} }, (e, r) =>      
      DONE() if r.length is 0  
      if r.length > 0
        for c in r
          ups.push assign {_id:c._id}, tags: c.tags.split(',').map((short)=>CAL.tags_cached[short])
        honey.model.DAL.Content.updateSetBulk ups, (e, r) ->
          $log('update prob'.red, e) if e
          $log('update prob'.red, r) if r.modifiedCount is not ups.length
          # fs.writeFileSync(paths.fixtures+"/content.js", lup+"\n}")
          DONE()      


  IT "Import /read", ->
    # $log('OPTS.config.paths.read', paths.read)
    lookup = "module.exports = ["
    
    fs.readdirSync(paths.read)
      .filter((f) => /.png$/.test(f))
      .forEach (f) => 
        lookup += """\n  {
  url: '/cms/read/#{f}',
  time: '#{moment(f.split(""<"")[0].trim(),"YYMMDD")}',
  title: '#{f.split("<")[1].split(">")[0]}' }, """
    
    # console.log('f'.blue, lookup)

    fs.writeFileSync(paths.fixtures+"/read.js", lookup+"]\n")

    DONE()


  IT.skip "Update content from fixt", ->
    # lup = "module.exports = {"
    ups = []
    keys = []
    $in = Object.keys(FIXTURE.content)
    # $log('update.$in', $in)
    DAL.Content.getManyByQuery {key:{$in}}, (e, r) =>      
      r.forEach (c) =>
        fixt = FIXTURE.content[c.key]
        if fixt.tags
          tags = fixt.tags.split(',').map((short)=>CAL.tags_cached[short])
          fixt = assign {}, fixt, {tags}
        ups.push assign {_id:c._id,key:c.key}, fixt
        # lup += "\n  '#{c.key}': { "
        # for attr of fixt 
          # lup += "\n    '#{attr}': `#{fixt[attr]}`"
        # lup += "\n }," 
      $log('update.fixt'.green, ups.length, ups.map((c)=>c.key).join(' '))
      honey.model.DAL.Content.updateSetBulk ups, (e, r) ->
        $log('update prob'.red, e) if e
        $log('update prob'.red, r) if r.modifiedCount is not ups.length
        # fs.writeFileSync(paths.fixtures+"/content.js", lup+"\n}")
        DONE()


  IT.skip "Insert content from fixt", ->
    keys = []
    saved = 0
    DAL.Content.getManyByQuery {}, (e, r) =>      
      $db = r.map((c)=>c.key)
      ins = Object.keys(FIXTURE.content)
                  .filter((k)=>$db.indexOf(k) is -1)
                  .map (key)=>
                    # byId: new ObjectId("5af6da2ea7d95b1016b45fed") 
                    meta = history: { create: Date }
                    tags = FIXTURE.content[key]
                              .tags.split(',').map((short)=>CAL.tags_cached[short])
                    assign meta, FIXTURE.content[key], {tags}

      if ins.length is 0 
        DONE() 
      else 
        for c in ins
          DAL.Content.create c, (e, r) ->
            DONE(e) if e
            $log('Content insert failed'.manenta) if !r 
            DONE() if saved++ is ins.length


  after (cb) ->
    DAL.Content.getManyByQuery { tags: {$type:'string'} }, (e, r) =>     
      expect(r.length).to.equal(0)
      CAL.get 'contents', honey.logic.contents.cached.chain, () =>
        {toc} = CAL.contents
        expect(Object.keys(toc.parts).length).to.equal(5)
        for k in Object.keys(toc.chapters)
          ch = toc.chapters[k]
          # $log('ch', ch)
          expect(ch.id, ch.idx).to.exist        
          expect(ch.url, ch.idx).to.exist        
          expect(ch.title, ch.idx).to.exist                
          expect(ch.md, ch.idx).to.exist
        cb()
