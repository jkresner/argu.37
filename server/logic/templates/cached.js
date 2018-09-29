
module.exports = ({Template}, Data, DRY) => ({


  exec(cb) {

    let hash = {}
    assign(hash, require('./_data'))

    Template.getManyByQuery({}, (e,r) => {
      if (e) return cb(e)
      for (let {key,parts} of r) {
        hash[key] = {}
        for (let part in parts)
          has[key][part] = tmpl.parts[part]
      }

      cb(null, hash)
    })
  }


})