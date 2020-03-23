function linkify(md, toc, media) {
  var txt = md.toString()
  for (let id in toc) {
    var uri = media == 'w' ? toc[id].url : toc[id].url.replace('/','#c-').replace(/\//g,'-')
    txt = txt.replace(new RegExp(`\\]\\(${toc[id].id}\\)`,'g'), `](${uri})`)
  }
  return txt
}

function layout_chapter(toc, key, tmplt, media) {
  media = media || 'w' // w=web , p=print
  let pos = toc.map(c=>c.id).indexOf(key)
  let p = toc[pos]
  var body = marked(
    `# ${p.title}  \n` +
    linkify(p.md,toc,media)
      .replace(/\(\/img\//g,`(${config.http.static.host}/cms/post/${key}/`)
      .replace(/\(\/atchd\//g,`(${config.http.static.host}/ag/`)

  )

  var id = media == 'w' ? key : p.url.replace('/','#c-').replace(/\//g,'-').replace('#','')
  return (tmplt || (() =>`
<div id="${id}">
  ${body}
</div>`))(id, body)
}

//
function web_chapter(page) {
  console.log('web_chapter'.yellow, page.id)
  return layout_chapter(CAL.toc.chapters, page.id, (page.tp||{}).ch_w, 'w') 
}

//
function print_chapter(key, toc, tp) {
// return layout_chapter(toc, key, (tp||{}).ch_p, 'p')
}

module.exports = { 
  linkify: linkify,
  web_chapter: web_chapter,  
  print_chapter: print_chapter,
  // mail_btw: mail_header,

  // src_header: function(src, ops) {
    // console.log("src_header", src)
    // if (src.tis == 'comm gmail')
      // return mail_header(src, ops)
    // if (src.
    // return
  // },
 
  source_figure: function(src, scope) {
    // $log('source_figure',src)
    scope = scope || 'fig'
    var mime = src.data.mimeType
    var css = mime.replace(/(image|application)\//,'')
                + ' ' + src.render
    var id = scope + '_' + src.name
    var body = ''

    if (src.render=='snippet')
      body = marked(' >>> ' + src.md.snippet)
    if (src.render=='img')
      body = `<img title='${src.title} ${src.published}' src='${src.file.url}' /><figcaption>${src.title}</figcaption>`
      // body = `![${src.title} ${src.published}](${src.uri})`
    if (src.render=='doc')
      body = marked(Object.keys(src.md)
            .map(key => `_page:${key}_  \n___  \n${src.md[key]}`)
            .join('___  \n'))

    return '<figure id="'+id+'" class="'+css+'">'+body+'</figure>'
  }

}
