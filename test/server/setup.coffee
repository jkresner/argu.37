module.exports = (cb) =>

  DB.clearCollections = (names, success) =>
    if !success
      success = names
      names = _.without(OPTS.config.db.mongo.collections, "template")
    else
      names = names.split(' ')

    fns = names.map((name) => (cb) => DB.clear(name, cb))
    $log('DB.clear'.yellow.dim, "(#{names.join('|')})".gray.dim)
    WHEN(fns, success)


  # DB.resetCollections = (success) =>
  # DB.clearCollections (r) =>
  #     {jk,ag} = FIXTURE.users
  #     DB.ensureDocs 'User', [jk,ag], =>
  #         success()

  # DB.resetCollections(cb)

  cb()
