module.exports = (app, mw) => {

  let fs = join(config.appDir, 'fs')

  honey

    .Router('fs', {type: 'static'})

    .get(['*favicon*',
          '*apple-icon*',
          '*android-icon*',
          '*ms-icon*'], (req, res, next) =>

      res.sendFile('favicon.ico', {
        headers: {'Content-Type':'image/x-icon' },
        root: join(fs, 'robots') } )
    )
    .static('/img',  {dir:join(fs, 'img')})

    // .use('authd')
    .static('/atchd', {dir:join(fs, 'atchd')})
    // .static(/recd', {dir:join(fs, 'recd')})

    .get('/source/:msgId/atchd/:filename', (req,res,next) => {
      let {msgId,filename} = req.params
      let opts = req.query||{}
      honey.logic.sources.attachGmail.chain
        .call(req.user, msgId, filename, opts, (e, r) => {
          if (e) return next(e)
          res.sendFile(r.dest)
        })
    })


    .static('/read',  {dir:join(fs, 'read')})


}
