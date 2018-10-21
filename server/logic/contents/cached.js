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
      for (let c of r) {
        if (/TOC/i.test(c.type))
          hash.toc.parts = c.parts
        if (c.type == 'CHAPTER') {
          let tempMap = { toc:'toc', gossary3:'gossary3', innocent: '1_innocent', apprehension: '2_avo',
              drlyme: '3_dr', oneill: '4_ftcomplain', resolve: '5_jk_resolve',
              lot36ensuite: '6_lot36_ensuite', lot36:'7_lot36' }
          if (/(toc|gossary3|innocent|apprehension|oneill|resolve|lot36|drlyme)/.test(c.key))
            // $log('key', c.key, tempMap[c.key])

c.parts.body.live = require(join('../../../cmd/d/migrate/2018-09/fix/init/md',tempMap[c.key]))

          hash.toc.chapters.push({
            id: c.key,
            url: c.uri,
            title: c.title,
            md: c.parts.body.live || c.parts.body.draft || c.parts.body.edit,
            idx: c.parts.chapter.idx
          })
        }
      }


      // console.log('cached.toc', hash.toc)
      global.toc = hash.toc
      cb(e, hash)
    })
  }

})
