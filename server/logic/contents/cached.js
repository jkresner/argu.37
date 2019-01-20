module.exports = (DAL, {Query,Opts}, DRY) => ({


  exec(cb) {
    let hash = { toc: { chapters: [], parts: null } }


    DAL.Content.getManyByQuery(Query.cached, Opts.cached, (e,r) => {
      if (e) return cb(e, r)

      for (let c of r) {

        if (/TOC/i.test(c.type))
          hash.toc.parts = c.parts
        if (c.type == 'CHAPTER') {
          let md = c.parts.body.live 
            || c.parts.body.draft 
            || c.parts.body.edit

          hash.toc.chapters.push({
            id: c.key,
            url: c.uri,
            title: c.title,
            md,
            idx: c.parts.chapter.idx
          })


      }



      }

      hash.toc.parts['0'] = { title: 'Strata Living Hell' }
      
      CAL.get('toc', done => done(null, hash.toc), (e) => {
        cb(e, hash)
      })
    })
  }


})
