module.exports = (DAL, {Query,Opts,Project}, DRY) => ({


  exec(opts, cb) {
    if (!cb) { cb = opts; opts = {} }
    let key = opts.key || 'mail-all'
    let query = assign({},Query.gmail)
    let mode = /thread/.test(opts.mode) ? 'thread' : 'message'
    let sort = { published: opts.newest == "1" ? -1 : 1 }
    let ops = assign({key}, Opts.list, {sort})
    if (opts.limit) {
      let limit = parseInt(opts.limit) || 100
      if (mode =='message')
        assign(ops, {limit})
      else {
        assign(query, Query.threads(limit, !!opts.newest))
      }
    }
    if (opts.raw)
      delete query.name

    if (opts.from)
      query.published = { '$gt': moment(opts.from).valueOf()  }

    // $log(`listGmail[${mode}/${opts.newest?'de':'a'}sc]`.cyan, ops)
    // $log('listGmail.query.ignored'.cyan, query.name['$nin'].length)
    $log('listGmail.query'.cyan, JSON.stringify(query))

    DAL.Source.getManyByQuery(query, ops, (e, messages) => {
      if (e) return cb(e)
      cb(null, {
        sources:messages,
        mode,
        newest: opts.newest?true:false,
        raw:    opts.raw?true:false
      })
    })
  },


  project: Project.listGmail


})
