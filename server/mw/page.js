const layout = 'web'

module.exports = (app, mw) =>

  idx =>

    function(req, res, next) {
      let [p,c] = idx.split('.')
      let pos = toc.chapters.map(c=>c.idx).indexOf(idx)
      let {id} = toc.chapters[pos]
      let page = { id, next: toc.chapters[pos+1] }

      let view = 'chapter'
      if (id == 'intro') view = 'home'
      else if (id == 'toc') view = 'toc'
      else
        page.part = { idx:p, title: toc.parts[p].title }

      // $log('web.chapter', idx, id, view, page)

      let opts = { layout, page, view }
      return mw.res.page(view, opts)(req, res, next)
    }
