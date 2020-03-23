
  //
  // let fs = join(config.appDir, '37')
  // honey
  // .Router('fs', {type: 'static'})
  // .static('/img',  {dir:join(fs, 'img')})
  //   // .use('authd')
  //   .static('/atchd', {dir:join(fs, 'atchd')})
  //   // .static(/recd', {dir:join(fs, 'recd')})
  //   .get('/source/:msgId/atchd/:filename', (req,res,next) => {
  //     let {msgId,filename} = req.params
  //     let opts = req.query||{}
  //     honey.logic.sources.attachGmail.chain
  //       .call(req.user, msgId, filename, opts, (e, r) => {
  //         if (e) return next(e)
  //         res.sendFile(r.dest)
  //       })
  //   })
