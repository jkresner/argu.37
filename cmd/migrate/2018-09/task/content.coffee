before (DONE) ->
  DATA.reset 'content', DONE


IT "INIT", ->
  {chapters,toc} = FIXTURE.content
  for i in chapters
    i.tags = i.tags.split(',').map (t) => _.select(FIXTURE.tags[t], '_id short')

  ins = chapters.concat([toc])
  DAL.Content.bulkOperation ins, [], [], (e,r) ->
    $log('insert e'.red, e) if (e)
    $log('insert prob'.red) if r.insertedCount is not ins.length
    $log('content.ins() toc'.dim, "ok:#{r.insertedCount}".green)
    DONE()
