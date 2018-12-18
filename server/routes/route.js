module.exports = (app, mw, ops) => {


  ops['bot'].off ? 0 : honey.
    Router('bot', ops.bots)
      .head('*',
        (r, res) => res.status(403).send(''))
      .all(/(^\/(_|admin|cms|system|login\/)|wp-|\.(php|txt))/i,
        (r, res) => res.status(200).send(''))
      .get(['*favicon*','*-icon*',],
        (r, res) => res.sendFile('favicon.ico', config.http.static.favicon))


//  ops['reroute'].off ? 0 : honey
//     .Router('reroute', ops.reroute)


  ops['adm'].off ? 0 : honey.
    Router('adm', ops.adm)
      .use(mw.$.nobot)
      .use(mw.$.session)
      .use(mw.$.adm)
      .use((req,res,next) => {
        let name = req.originalUrl.split('?')[0].replace("/","")
        let bodycss = name.replace('/',' ')
        mw.res.page(`page/${name}`,{bodycss,layout:'adm'})(req,res,next)
      }, {end:1})
      .get('/law', mw.data.page('laws.law', '?'))
      .get('/srcs', mw.data.page('sources.published','?'))
      .get('/srcs/:source', mw.$.param('source'), mw.data.page('sources.edit',{param:'source'}))
      // .get('/pl8', mw.$.pd('templates'))


  honey.Router('sets', ops.sets)
    .use(mw.$.nobot)
    .use(mw.$.session)
    // .use(mw.res.page('set_browse', ops.set),{end:true})
    // .get('/mail', mw.$.pd('sources.listGmail',{params:['query']}))
    // .get('/published', mw.$.pd('sources.listPublished',{params:['query']}))


  // ops['print'].off ? 0 :
  // const parts = [[],[],[],[]]
  // for (let {idx,id} of toc.chapters)
  //   parts[parseInt(idx.split('.')[0])].push(id)
  // const innocent =
  //   ['innocent','lot36','jk','resolution','oneill','disarray'] //,'anxiety']
  // honey.Router('print', ops.print)
  //   .use(mw.$.nobot)
  //   .use(mw.$.session)
  //   .get('/all', mw.$.pdf(parts))
  //   .get('/part-1', mw.$.pdf([[parts[0][0]].concat(parts[1])]))
  //   .get('/part-2', mw.$.pdf([parts[2]]))
  //   .get('/part-3', mw.$.pdf([parts[3]]))
  //   .get('/474', mw.$.pdf([innocent]))

  let final = null // '/strata-living/'
  let current = '/draft-v1.1'
  let ver = final || current

  ops['page'].off ? 0 : honey
    .Router('web', ops.web)
      .use(mw.$.nobot)
      .use(mw.$.session)
      .get('/', mw.$.pch("0.1"))
      .get(`${ver}/intro`, (req, res) => res.redirect(301, '/') )
      .get(`/strata-living/toc`, mw.$.pch("0.2"))
      .get(`${ver}/13385-36/474.15-13`, mw.$.pch("1.6"))
      .get(`${ver}/13385-agent/oneill-management`, mw.$.pch("1.4"))
      .get(`${ver}/13385-36/apprehension`, mw.$.pch("1.7"))
      // .get('/strata-living/13385-36/background', mw.$.pch("1.1"))
      // .get('/strata-living/13385-36/dispute-resolution', mw.$.pch("1.5"))
      // .get('/strata-living/13385-36/apartment-saga', mw.$.pch("1.2"))
      // .get('/strata-living/13385-36/shower-leak', mw.$.pch("1.2.1"))
      // .get('/strata-living/13385-36/stop-gap', mw.$.pch("1.2.2"))


  // .static('/read',  {dir:join(fs, 'read')})
  // for (let {url,idx} of toc.chapters)
  //   web.get(url, mw.$.page(idx))
  //   web.get('/stara-library/research-history',
  //     // mw.$.nobot,
  //     mw.$.session,
  //     (req, res, next) => {
  //       let files = []
  //       require('fs').readdirSync(join(config.appDir, 'fs', 'read')).forEach(f => {
  //         if (f[0]!='.')
  //           files.push({
  //             url:`/read/${f}`,
  //             time: moment(f.split('<')[0].trim(),'YYMMDD'),
  //             title:f.split('<')[1].split('>')[0]
  //           })
  //       })
  //       // console.log(files)
  //       req.locals.r = files
  //       next()
  //     },
  //       mw.res.page('reading', {layout:'web'})
  //     )

  // let fs = join(config.appDir, 'fs')
  // honey
  //   .Router('fs', {type: 'static'})
  //   .static('/img',  {dir:join(fs, 'img')})
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



}

