const layout = 'argu'

module.exports = (app, mw) =>


  honey.Router('sets', {type: 'html', mount: '/sets' })
    .use(mw.$.livereload)
    .use(mw.$.nobot)
    .use(mw.$.session)

    // .get('/templates', mw.$.pd('templates.tmplList'), mw.res.page('tmpls', {layout}))

    // .get('/law', mw.$.pd('clause.listClause'), mw.res.page('law', {layout}))

    .use(mw.res.page('set_browse', {layout}),{end:true})

    .get('/mail', mw.$.pd('sources.listGmail',{params:['query']}))

    .get('/published', mw.$.pd('sources.listPublished',{params:['query']}))

