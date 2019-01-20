module.exports = (app, mw, ops) => {

  delete app.locals.static
  delete app.locals.about
  // delete app.locals.settings  

  if (honey.cfg('log').verbose)
    console.log('routes'.yellow, ops, 'app.locals', app.locals)

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
        let slug = req.originalUrl.split('?')[0].replace("/","")
        let bodycss = slug.replace('adm/','').split('/')[0]
        let vd = req.locals.r.vd
        let pd = { 
          layout: "layout", 
          bodycss, 
          html: { title: bodycss },
          vd,
          r: _.omit(req.locals.r,'vd')
        }
        // console.log('pd', pd)
        // console.log('req.locals', req.locals)        
        res.render(`page/adm/${bodycss}`, pd)
      }, {end:1})
   // .get('/pl8', mw.$.pd('templates'))
      .get('/law', mw.data.page('laws.law', '?'))
      .get('/srcs', mw.data.page('sources.published','?'))
      .get('/src/:source', mw.$.param('source'), 
        mw.data.page('sources.edit',{param:'source'}))
  
    // honey.Router('sets', ops.sets)
    // .use(mw.$.nobot)
    // .use(mw.$.session)
    // .use(mw.res.page('set_browse', ops.set),{end:true})
    // .get('/mail', mw.$.pd('sources.listGmail',{params:['query']}))
    // .get('/published', mw.$.pd('sources.listPublished',{params:['query']}))


  // let final = null // '/strata-living/'
  // let current = '' //'/draft-v1.1'
  // let ver = final || current
  let web = ops['page'].off ? 0 : honey
    .Router('web', ops.web)
      .use(mw.$.nobot)
      .use(mw.$.session)
      .get('/', mw.$.ch('0.1')) 
      .get('/strata-research',  mw.data.page('contents.read'), 
        mw.res.page('page/reading') )

  for (let {url,idx,md} of CAL['toc'].chapters) web
      .get(url, mw.$.ch(idx)) 
    // + $log(idx.dim, '\t', url.yellow, (md||'\n').split('\n')[0])
  
}

