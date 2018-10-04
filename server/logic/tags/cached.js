module.exports = ({Tag}, {Opts}, DRY) => ({

  exec(cb) {
    let hash = {}, idx = {}
    Tag.getManyByQuery({}, Opts.cached, (e,r) => {

      r.forEach(t => {
          idx[t._id] = t
          hash[t.short] = _.select(t, '_id name short slug') })

      CAL['tagIdx'] = idx

      cb(null, hash)
    })
  }

})

