module.exports = (DAL, {Query,Opts,Project}, DRY) => ({


  exec(opts, cb) {
    if (!cb) { cb = opts; opts = {} }

    let newest = opts.newest?true:false
    let sort = { published: newest ? -1 : 1 }
    let ops = assign({key:'published'}, {sort})
    if (opts.limit) ops.limit = parseInt(opts.limit) || 100

    DAL.Source.getManyByQuery(Query.published, assign(Opts.list, ops), (e, sources) =>
      e ? cb(e) : cb(null, { sources, opts: assign(ops, {newest})}) )
  },


  project: Project.listAll


})
