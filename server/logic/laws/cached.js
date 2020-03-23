module.exports = ({Law}, {Opts}, DRY) => ({

  exec(cb) {
    var hash = {}
    Law.getManyByQuery({}, Opts.cached, (e,r)=>{
      for (let l of r)
        hash[l.ttl] = l

      // console.log('laws.cached'.yellow, Object.keys(hash), hash)
      cb(null, hash)
    })
  }

})

