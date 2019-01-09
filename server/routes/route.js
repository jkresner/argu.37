module.exports = (app, mw, ops) => {

  if (honey.cfg('log').verbose)
    console.log('routes'.yellow, ops)

  //
  ops['bot'].off ? 0 : honey.
    Router('bot', ops.bots)
      .head('*',
        (r, res) => res.status(403).send(''))
      .all(/(^\/(_|admin|cms|system|login\/)|wp-|\.(php|txt))/i,
        (r, res) => res.status(200).send(''))
      .get(['*favicon*','*-icon*',],
        (r, res) => res.sendFile('favicon.ico', config.http.static.favicon))

  //
  ops['reroute'].off ? 0 : honey
    .Router('reroute', ops.reroute)
    
  //
  ops['adm'].off ? 0 : honey.
    Router('adm', ops.adm)
      .use(mw.$.nobot)
      .use(mw.$.session)
      .use(mw.$.adm)
      .use((req,res,next) => {
        let layout = "layout"
        let slug = req.originalUrl.split('?')[0].replace("/","")
        let title = slug.replace('adm/','').split('/')[0]
        let html = { title }
        let bodycss = title;
        mw.res.page(`page/adm/${name}`,{layout,bodycss,html})(req,res,next)
      }, {end:1})
   // .get('/pl8', mw.$.pd('templates'))
      .get('/law', mw.data.page('laws.law', '?'))
      .get('/srcs', mw.data.page('sources.published','?'))
      .get('/src/:source', mw.$.param('source'), 
        mw.data.page('sources.edit',{param:'source'}))
  
  //
    // honey.Router('sets', ops.sets)
    // .use(mw.$.nobot)
    // .use(mw.$.session)
    // .use(mw.res.page('set_browse', ops.set),{end:true})
    // .get('/mail', mw.$.pd('sources.listGmail',{params:['query']}))
    // .get('/published', mw.$.pd('sources.listPublished',{params:['query']}))

  //
  let final = null // '/strata-living/'
  let current = '' //'/draft-v1.1'
  let ver = final || current
  let web = ops['page'].off ? 0 : honey
    .Router('web', ops.web)
      .use(mw.$.nobot)
      .use(mw.$.session)
// for (let {url,idx} of toc.chapters)
//   web.get(url, mw.data.page(idx))
      .get('/', mw.$.ch("0.1"))
      .get(`/strata-living/toc`, mw.$.ch("0.2"))
      .get(`/intro`, (req, res) => res.redirect(301, '/') )
      .get(`${ver}/13385-36/474.15-13`, mw.$.ch("1.6"))
      .get(`${ver}/13385-agent/oneill-management`, mw.$.ch("1.4"))
      .get(`${ver}/13385-36/apprehension`, mw.$.ch("1.7"))
      // .get('/strata-living/13385-36/background', mw.$.ch("1.1"))
      // .get('/strata-living/13385-36/dispute-resolution', mw.$.ch("1.5"))
      // .get('/strata-living/13385-36/apartment-saga', mw.$.ch("1.2"))
      // .get('/strata-living/13385-36/shower-leak', mw.$.ch("1.2.1"))
      // .get('/strata-living/13385-36/stop-gap', mw.$.ch("1.2.2"))

      .get('/strata-research',  mw.data.page('contents.read'), 
        mw.res.page('page/reading') )

}

