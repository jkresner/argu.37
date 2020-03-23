module.exports = (DAL, {Query,Opts,Project}, DRY) => ({


  exec(ref, cb) {
    let query = {ref}
    // let mode = /thread/.test(opts.mode) ? 'thread' : 'message'
    // let sort = { published: opts.newest == "1" ? -1 : 1 }
    let ops = {} //

    $log(`getSet`.cyan, ref)

    DAL.Set.getByQuery(query, ops, (e, set) => {
      if (e) return cb(e)
      cb(null, set)
    })
  },


  project: Project.item


})
