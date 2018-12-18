module.exports = ({Source}, {Query,Project}, DRY) => ({


  validate(user, msgId) {
    if (!msgId) return 'id required'
    if (msgId.length != 16) return 'hex length 16 required'
  },


  exec(msgId, cb) {
    Source.getByQuery(Query.existing.gmail(msgId), (e, existing) => {
      if (e) return cb(e)
      if (existing) return cb(
        null,
        $log(`src.gmail[${msgId}] exists`.green.dim),
        existing)
      Wrappers.gmail.getMsg(msgId, {}, (e2,r) => e2 ? cb(e2) :
        Source.create(Project.gmail_db(r), cb))
    })

    // data.log = DRY.logAct(null, 'create', user)
    // data.time = localDayStart.utc().add(data.day,'day').toDate()
    // data.tz = { id: place.geo.tz, utc_offset:
    //   moment.tz.zone('America/Los_Angeles').offset(localDayStart) }
  },


  project: Project.item


})
