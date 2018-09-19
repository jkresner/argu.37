module.exports = ({Law}, {Query,Opts,Project}, DRY) => ({


  exec(opts, cb) {
    let query = {}
    if (opts.authority) query.in = opts.authority
    Law.getManyByQuery(query, cb)
  },


  project: Project.listLaw


})
