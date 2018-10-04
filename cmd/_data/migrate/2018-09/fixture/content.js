const toc = {
  _id: new ID(),
  key: 'toc-sections',
  uri: '/toc#sections',
  type: 'TOC',
  title: 'Table of contents',
  tmpl: 'toc.hbs',
  byId: ID("5b9ec18406475ef623bd5b39"),
  history: { create: Date() },
  parts: {
    "1": { title: 'My perspective' },
    "2": { title: 'Insights & opinions' },
    "3": { title: 'Experimental software' },
    html: {
      title:          'Table of contents - Strata living',
      canonical:      `https://www.37paulst.com/toc`,
      description:    '',
      ogTitle:        'Table of contents - Strata living',
      ogUrl:          `https://www.37paulst.com/toc`,
      ogDescription:  '',
      ogType:         'book',
      ogImage:        null, ogVideo: null }}
}

let md = require(`./init/md`)
let chapters = [
  { idx:'0.1', key:'intro',          uri:'/strata-living/intro',
    tags:'living,oc,sc,action', title:"Strata living @ 37 Paul St" },
  { idx:'0.2', key:'toc',            uri:'/strata-living/toc',
    tags:'living', title:"Table of contents" },
  { idx:'1.1', key:'jk',             uri:'/strata-living/13385-36/background',
    tags:'lot', title:"Personal context" },
  { idx:'1.2', key:'lot36',          uri:'/strata-living/13385-36/apartment-saga',
    tags:'lot,oc', title:"Apartment saga" },
  { idx:'1.2.1', key:'lot36ensuite', uri:'/strata-living/13385-36/shower-leak',
    tags:'lot', title:"Failing strata shower waterproofing story" },  // Stop-gap stress
  { idx:'1.3', key:'disarray',       uri:'/strata/management-disarray',
    tags:'oc,sc', title:"Strata management disarray" },
  { idx:'1.4', key:'oneill',         uri:'/strata/oneill-strata-management',
    tags:'sa', title:"Strata Agent Anarchy" },
  { idx:'1.7', key:'apprehension',   uri:'/strata-living/13385-36/apprehension',
    tags:'crime,sa', title:"AVO" },
  { idx:'1.6', key:'innocent',       uri:'/strata-living/13385-36/474.15-13',
    tags:'crime,sa', title:"Innocent" },
  { idx:'1.5', key:'resolve',        uri:'/strata-living/13385-36/dispute-resolution',
    tags:'lot,sc', title:"Strata dispute resolution attempts" },
  { idx:'2.1', key:'hindsight', uri:'/nsw-strata/strata-schemes-management-hindsight',
    tags:'oc', title:"*Strata Living. Get involved* hindsight" },
  { idx:'2.2', key:'cc', uri:'/nsw-strata/concrete-cancer',
    tags:'oc,build', title:"Concrete Cancer - Who cares?" },
  { idx:'2.3', key:'harmony', uri:'/nsw-strata/harmony-or-strata-liability',
    tags:'sc,liable,living', title:"Strata harmony, or liability?" },
  { idx:'2.4', key:'caselaw', uri:'/nsw-strata/strata-schemes-management-act-2015-caselaw',
    tags:'order,living', title:"Strata caselaw since SSMA 2015" },
  { idx:'2.5', key:'litigation', uri:'/nsw-strata/lawyers-and-litigation-2018',
    tags:'action', title:"NSW Strata legal landscape and litigation in 2018" },
  { idx:'2.6', key:'startups', uri:'/nsw-strata/startup-ideas',
    tags:'living,tech', title:"Top 2018 opportunities startups can solve for NSW" },
  { idx:'3.1', key:'publishing', uri:'/software/print-friendly-multimedia-web-publishing',
    tags:'living,tech', title:"Hyper-accessible hybrid print-web publishing" },
  { idx:'3.2', key:'infrastructure', uri:'/software/owners-corporation-infrastructure',
    tags:'oc,tech', title:"Strata Owners Corporation software infrastructure" },
  { idx:'3.3', key:'legal', uri:'/software/nsw-strata-legal-case-builder',
    tags:'action,tech', title:"Court application and evidence compiler" },
  { idx:'3.4', key:'argu', uri:'/software/legal-argument-compiler',
    tags:'action,tech', title:"Legal argument compiler" },
]

chapters.forEach(c => {
  c._id = new ID()
  c.type = c.type || 'CHAPTER'
  c.tmpl = c.tmpl || 'chapter.hbs'
  c.history = { create: Date() }
  c.byId = ID("5b9ec18406475ef623bd5b39")
  c.parts = { html: {
      title:          c.title,
      canonical:      `https://www.37paulst.com/${c.url}`,
      description:    '',
      ogTitle:        c.title,
      ogUrl:          `https://www.37paulst.com/${c.url}`,
      ogDescription:  '',
      ogType:         'article:section',
      ogImage:        null, ogVideo: null
    },
    body: { draft: md[c.key].live ? null : md[c.key].edit,
            edit: md[c.key].live ? md[c.key].edit : null,
            live: md[c.key].live },
    chapter: { idx: c.idx }
  }
  // c.tags = c.tags.split(',').map( short => FIXTURE.tag[short] )
                            // .map(({_id,short})=>assign({},{_id,short}))

  // c.rx = new RegExp(`\\]\\(${c.id}\\)`,'g'),
  // c.w = c.url
  // c.p = c.url.replace('/','#c-').replace(/\//g,'-')
})

module.exports = {toc,chapters}
