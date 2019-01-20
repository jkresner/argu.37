module.exports = (app, mw) =>

  idx =>

    function(req, res, next) {
      let {chapters,parts} = CAL.toc
      let [p,c] = idx.split('.')
      let pos = chapters.map(c=>c.idx).indexOf(idx)
      let {id} = chapters[pos]
      let page = { id, pos, next: chapters[pos+1] }
      let title = parts[p].title || 'intro'

      let view = 'page/chapter'
      if (/intro/.test(id)) 
        view = 'page/landing'
      else
        page.part = { idx:p, title }

      // $log('ch'.red, id, view, 
      //   '\nidx'.cyan, idx, 
      //   'pos:'.cyan+ pos,
      //   'next:', page.next)
      // $log('chapters[pos]'.yellow, CAL.toc.chapters[pos])

      let opts = { page, view, html: { title } }
      return mw.res.page(view, opts)(req, res, next)
    }
