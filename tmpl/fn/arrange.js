
function linkify(md, toc, media) {
  let txt = md.toString()
  for (let id in toc)
    txt = txt.replace(toc[id].rx, `](${toc[id][media]})`)
  return txt
}

function layout_chapter(toc, key, tmplt, media) {
  // console.log('toc'.magenta, toc)
  media = media || 'w' // w=web , p=print
  let body = marked(linkify(toc[key].md,toc,media))
  let id = media == 'w' ? key : toc[key].p.replace('#','')
  return (tmplt || (() =>`
<div id="${id}">
  ${body}
</div>`))(id, body)
}


module.exports = {
  linkify: linkify,
  web_chapter: function(toc, key, tp) {
    return layout_chapter(toc, key, tp.ch_w, 'w') },
  print_chapter: function(toc, key, tp) {
    return layout_chapter(toc, key, tp.ch_p, 'p') },


  mail_btw: function(mail) {
    // var htmEncode = function(str) { return str
    //   .replace(/[\u00A0-\u9999<>\&]/gim, i => `&#${i.charCodeAt(0)};`) }

    // return htmEncode(mail.from)
    //     + ' to '
    //     + htmEncode(mail.to)
    //     + mail.cc?' CC '+htmEncode(mail.cc):''
    // ).replace(/(\,|;)/g,'')

    return (mail.from
        +' to '+mail.to
        +(mail.cc?' CC '+mail.cc:'')
      )
      .replace(/[\u00A0-\u9999<>\&]/gim,
        function(i) { return `&#${i.charCodeAt(0)};` })
      .replace(/(\,|;)/g,'')
  }

}
