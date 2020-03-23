module.exports = ({Source}, {Project}, DRY) => ({


  exec(source, cb) {
    cb(null, {source})
    // Source.getById(q, ops, (e,r) => e ? cb(e) : cb(e, {source:r}))
  },


  project: Project.edit


})
