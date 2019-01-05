module.exports = (DAL, {Query,Opts}, DRY) => ({


  exec(cb) {
    let files = []
    CAL.get('read', (done) => {
      require('fs').readdirSync(join(config.appDir, '37', 'read')).forEach(f => {
        if (f[0]!='.') 
          files.push({
            url:`/read/${f}`,
            time: moment(f.split('<')[0].trim(),'YYMMDD'),
            title:f.split('<')[1].split('>')[0]
        })
      })
      // console.log(files)
      done(null, files)
    }, cb)      
  }


})
