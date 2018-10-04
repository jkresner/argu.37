module.exports = (app, mw, ops) => ops['adm'].off ? 0 :

  honey.Router('adm', ops.adm)
    .use(mw.$.livereload)
    .use(mw.$.nobot)
    .use(mw.$.session)
    // .use(mw.$.adm)

    .use((req,res,next) => {
      let name = req.originalUrl.split('?')[0].replace("/","")
      let bodycss = name.replace('/',' ')
      mw.res.page(name,{bodycss,layout:'adm'})(req,res,next)
    }, {end:1})

    .get('/law', mw.$.pd('laws.law', 'query'))
    .get('/srcs', mw.$.pd('sources.published','query'))
    .get('/pl8', mw.$.pd('templates'))
