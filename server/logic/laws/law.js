module.exports = ({Law}, {Query,Opts,Project}, DRY) => ({


  exec(ops, cb) {
    q = Query.laws(ops)
    Law.getManyByQuery(q, Opts.list, (e,laws) => cb(e, e?null:{laws,ops}) )
  },


  project: Project.authority


})
