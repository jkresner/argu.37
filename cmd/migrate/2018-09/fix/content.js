let md = require('../../../../37/2018-09/ch0.md')
let chapters = require('../../../../37/2018-09/ch0')

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
