module.exports = ({Tag}, {Query,Opts}, DRY) => ({


  exec(term, cb) {

    Tag.getManyByQuery(Query.search(term), Opts.search, (e,r) => {
      for (let t of r||[]) {
        if (t.name.toLowerCase() == term.toLowerCase())
          t.score += 5000
        else if (t.name.toLowerCase().indexOf(term.toLowerCase()) == 0)
          t.score += 1000
      }
      cb(e, r ? _.take(_.sortBy(r, t => -1*t.score), 4) : null)
    })

  }


})
