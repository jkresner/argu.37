module.exports = ({Source}, Data, DRY) => ({


  validate(user, {id,existing,deletable}) {
    if (!id) return 'id required'
    if (id.length != 16) return 'hex length 16 required'
  },


  exec({id,existing,deletable}, cb) {
    Wrappers.gmail.getTheadMsgs(id, (e,r) => {
      if (e) return cb(e)
      console.log('gmail.threadId', id, `existing: ${existing.length}`)
      let inserts = []
      for (let m of r.messages) {
        if (deletable.indexOf(m.id) > -1)
          console.log('gm.id', m.id, `del`.magenta)
        else if (existing.indexOf(m.id) > -1)
          console.log('gm.id', m.id, `exists`.cyan)
        else {
          console.log('gm.id', m.id, `insert`.green, m.snippet)
          inserts.push(Data.Project.db(m))
        }
      }
      let ok = 0
      if (inserts.length == 0) return cb(null, [])
      for (let s of inserts)
        Source.create(s, (ee,rr) => {
          if (ee) return cb(ee)
          if (++ok == inserts.length) cb(ee, inserts)
        })
    })
  }


})
