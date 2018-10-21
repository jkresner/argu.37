const {existsSync,writeFile} = require('fs')


module.exports = ({Source}, {Query,Project}, DRY) => ({


  validate(user, msgId, file, opts) {
    if (!msgId) return 'id required'
    if (msgId.length != 16) return 'hex length 16 required'
    if (!file) return 'filename required'
    if (opts.rotate && !/(90|180|270)/i.test(opts.rotate))
       return 'rotate 90 || 180 270'

    if (opts.w && !/\d+/.test(opts.w)) return 'width must be int'
    if (opts.h && !/\d+/.test(opts.h)) return 'height must be int'

    let extPattern = /^\d+,\d+,\d+,\d+$/
    let {extract,extract_resized,extract_inln} = opts
    if (extract_inln && !extPattern.test(extract_inln))
      return 'format "&extract_inln=left,top,width,height"'
    if (extract && !extPattern.test(extract))
       return 'format "&extract=left,top,width,height"'
    if (extract_resized && !extPattern.test(extract_resized))
       return 'format "&extract_resized=left,top,width,height"'
  },


  exec(name, file, opts, cb) {
    let id = null, dest = join(config.appDir, 'fs', 'atchd', `${name}__${file}`)
    console.log('dest', dest, opts)
    console.log('existsSync(dest)', existsSync(dest))
    if (existsSync(dest) && Object.keys(opts) == 0) return cb(null, {dest})

    function getAttachedFile(tree) {
      if (tree.filename == file) id = tree.body.attachmentId
      else (tree.parts||[]).forEach(p => getAttachedFile(p))
    }

    Source.getByQuery(Query.existing.gmail(name), (e, existing) => {
      if (existing) getAttachedFile(existing.data.payload)
      if (!id) return cb(e || DRY.NotFound(`attachd[${name}] not found`))

      Wrappers.gmail.downloadAttach(id, name, (e3, buf64) => {
        if (/.(jpg|jpeg|png)$/i.test(file)) {
          let w = opts.w ? parseInt(opts.w) : 800,
              h = opts.h ? parseInt(opts.h) : 600,
              cb2 = (e2,nfo2) => e2?cb(e2):nfo2

          DRY.img.sharpImg(buf64, dest, w, h, opts, (e1, nfo1) => {
            cb(e1, nfo1)
            DRY.img.sharpImg(buf64, `${dest}__inln.jpg`, 320, 320,
              assign(opts,{extract:opts.extract_inln}), cb2)
          })
        }
        else
          writeFile(pwd, attachment, e5 => {
            $log('ATTACH.save.raw'.cyan, e3? `${e3}`.red : pwd.green)
            cb(e5, {pwd})
          })
      })
    })

    // data.log = DRY.logAct(null, 'create', user)
    // data.time = localDayStart.utc().add(data.day,'day').toDate()
    // data.tz = { id: place.geo.tz, utc_offset:
    //   moment.tz.zone('America/Los_Angeles').offset(localDayStart) }
  }


})
