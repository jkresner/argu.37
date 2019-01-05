const layout = 'web'

module.exports = (app, mw) =>

  idx =>

    function(req, res, next) {
      let {chapters,parts} = CAL.toc
      let [p,c] = idx.split('.')
      let pos = chapters.map(c=>c.idx).indexOf(idx)
      let {id} = chapters[pos]
      let page = { id, pos, next: chapters[pos+1], toc: chapters }

      let view = 'page/chapter'
      if (/intro/.test(id)) 
        view = 'page/landing'
      else
        page.part = { idx:p, title: parts[p].title }

      // $log('ch'.red, id, view, '\nidx'.cyan, idx, 'pos:'.cyan+ pos)
      // $log('chapters[pos]'.yellow, chapters[pos])

      let opts = { layout, page, view }
      return mw.res.page(view, opts)(req, res, next)
    }
