module.exports = ({Source}, {Query,Project}, DRY) => ({


  validate(user, msgId) {
    if (!msgId) return 'id required'
    if (msgId.length != 16) return 'hex length 16 required'
  },


  exec(msgId, cb) {
    var existing = CAL['existing']

    if (existing.indexOf(msgId) > -1) return cb(
      null,
      $log(`src.gmail[${msgId}] exists`.green.dim))
      // existing[existing.indexOf(msgId)])

    Wrappers.gmail.getMsg(msgId, {}, (e,r) => e 
      ? cb(e) 
      : Source.create(Project.db(r), cb) )

    // data.log = DRY.logAct(null, 'create', user)
    // data.time = localDayStart.utc().add(data.day,'day').toDate()
    // data.tz = { id: place.geo.tz, utc_offset:
    //   moment.tz.zone('America/Los_Angeles').offset(localDayStart) }
  }


})
