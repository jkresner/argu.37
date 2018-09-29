module.exports = (app, mw) => {

  let web = honey
    .Router('pages', {type: 'html'})
    .use(mw.$.livereload)
    .use(mw.$.nobot)
    .use(mw.$.session)
    .get('/', mw.$.page("0.1"))
    .get('/intro', (req, res) => res.redirect(301, '/') )


  // CAL.toc()

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

}
