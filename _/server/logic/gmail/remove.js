module.exports =  (DAL, Data, DRY) => ({


  validate(usr, source) {
    if (!source) return 'source to delete not found'
  },


  exec(source, cb) {
    DAL.Source.remove({_id:source._id}, cb)
  }



})
