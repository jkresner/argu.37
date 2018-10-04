module.exports = ({Law}, {Opts}, DRY) => ({

  exec(cb) {
    var hash = {}
    Law.getManyByQuery({}, Opts.cached, (e,r)=>{
      for (let l of r)
        hash[l.ttl] = l

      cb(null, hash)
    })
  }

})

