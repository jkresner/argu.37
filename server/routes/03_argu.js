const layout = 'argu'


module.exports = (app, mw) =>

  honey.Router('argu', {type: 'html', mount: '/argu' })
    .use(mw.$.livereload)
    // .use([mw.$.nobot, mw.$.session, mw.$.adm])

    .use((req,res,next) => mw.res.page(
      req.url.split('?')[0].replace("/",""), {layout})(req,res,next), {end:1})

    .get('/law', mw.$.pd('laws.listLaw',{params:['query']}))

    .get('/gmail', mw.$.pd('sources.listGmail',{params:['query']}))

    .get('/tmpls', mw.$.pd('templates.tmplList'))
