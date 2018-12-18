module.exports = (app, mw) => {

  var adms = 'jony6'
  honey.cfg('middleware.forbid.adm').split(',')

  return mw.res.forbid('nonadmin',
      ({user}) => {
        if (!user)
          return '!authd'
        if (adms.indexOf(user._id) == -1)
          return `!adm.inc(${user._id})`
      })

}
