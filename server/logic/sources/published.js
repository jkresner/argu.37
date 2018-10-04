module.exports = ({Source}, {Query,Opts,Project}, DRY) => ({


  exec(opts, cb) {
    if (!cb) { cb = opts; opts = {} }

    let newest = (opts.newest||opts.n)?true:false
    let sort = { published: newest ? -1 : 1 }
    let ops = assign({key:'published'}, Opts.list, {sort})
    let limit = opts.limit || opts.l
    if (limit) ops.limit = parseInt(limit) || 100

    let q = assign({}, Query.published)
    if (opts.is) assign(q, {is:opts.is})

    Source.getManyByQuery(q, ops, (e,r) => e ? cb(e) : cb(e, {sources:r, ops}))
  },


  project: Project.list


})
