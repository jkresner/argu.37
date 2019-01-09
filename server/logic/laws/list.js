module.exports = ({Law}, {Query,Opts,Project}, DRY) => ({

  exec(ops, cb) {
    Law.getManyByQuery(Query.laws(ops), Opts.list, cb)
  },

  project: Project.list

})
