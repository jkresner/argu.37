
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


module.exports = {
  linkify: linkify,
  web_chapter: function(page) {
    // console.log('web_chapter'.yellow, page.id)


    return layout_chapter(page.toc, page.id, (page.tp||{}).ch_w, 'w') },
  print_chapter: function(key, toc, tp) {
    // return layout_chapter(toc, key, (tp||{}).ch_p, 'p')
  },


  mail_btw: function(mail) {
    if (!mail.from) return ''
    // $log('mail_btw', mail, !mail.cc?'':' CC '+mail.cc.replace(/(\,|;)/g,' '))
    // var htmEncode = function(str) { return str }
      // .replace(/[\u00A0-\u9999<>\&]/gim, i => `&#${i.charCodeAt(0)};`) }
    var cc = !mail.cc?'':(' CC '+mail.cc.replace(/(,|;)/g,' '))
    var r = `<tt>${mail.from}</tt> to <tt>${mail.to}</tt>`+cc

    return r

    // return (mail.from+' to '+mail.to
    //       +(mail.cc?' CC '+mail.cc:''))
    //          .replace(/[\u00A0-\u9999<>\&]/gim,
    //             function(i) { return `&#${i.charCodeAt(0)};` })
    //          .replace(/(\,|;)/g,'')
  },

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
