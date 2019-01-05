module.exports = (DAL, {Query,Opts}, DRY) => ({


  exec(cb) {
    let hash = { toc: { chapters: [], parts: null } }
    // cache.get('tags', getter, (tags) => {
    //   for (let {slug,htmlHead} of tags) {
    //     let url = htmlHead.canonical || `${host}/${tag}/${slug}`
    //     hash[url] = { url, htmlHead }
    //   }
    // })
    // cache.get('contents', getter, (content) => {
    //   let pages = content.filter(c=>c.type == 'page')
    //   for (let {slug,htmlHead} of pages) {
    //    let url = htmlHead.canonical || `${host}/${tag}/${slug}`
    //     hash[url] = { url, htmlHead }
    //   }
    // })
    // cache.get('reroutes', getter, (rule) => {
    // })
    DAL.Content.getManyByQuery(Query.cached, Opts.cached, (e,r) => {
      if (e) return cb(e, r)

      for (let c of r) {
        if (/TOC/i.test(c.type))
          hash.toc.parts = c.parts
        if (c.type == 'CHAPTER') 
          hash.toc.chapters.push({
            id: c.key,
            url: c.uri,
            title: c.title,
            md: c.parts.body.live || c.parts.body.draft || c.parts.body.edit,
            idx: c.parts.chapter.idx
          })
      }

      hash.toc.parts['0'] = { title: 'Strata Living Hell' }
      
      CAL.get('toc', done => done(null, hash.toc), (e) => {
        cb(e, hash)
      })
    })
  }


})
