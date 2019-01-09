module.exports = (DAL, {Query,Opts}, DRY) => ({


  exec(cb) {
    let files = []
    CAL.get('read', (done) => {
      const files = require('../../../37/2019-01/read.0')
      done(null, files)
    }, cb)      
  }


})
