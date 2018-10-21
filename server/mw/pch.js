const layout = 'web'

module.exports = (app, mw) =>

  idx =>

    function(req, res, next) {
      let [p,c] = idx.split('.')
      let pos = toc.chapters.map(c=>c.idx).indexOf(idx)
      // $log('pchr'.yellow, idx, pos, toc)
      let {id} = toc.chapters[pos]
      let page = { id, pos, next: toc.chapters[pos+1], toc: global.toc.chapters }

      let view = 'page/chapter'
      if (id == 'intro') view = 'page/home'
      else if (id == 'toc') view = 'page/toc'
      else
        page.part = { idx:p, title: toc.parts[p].title }

      // $log('web.chapter'.yellow, idx, page.id, `${view}.hbs`)

      let opts = { layout, page, view }
      return mw.res.page(view, opts)(req, res, next)
    }
