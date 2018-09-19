const {readFileSync} = require('fs')
const safeStr = str => new handlebars.SafeString(str)

let lookup = {}
for (let c of toc.chapters) lookup[c.id] = { rx: new RegExp(`\\]\\(${c.id}\\)`,'g'),
  w: c.url, p: c.url.replace('/','#c-').replace(/\//g,'-') }


const chapters = {

  linkify: (md, media='w') => {
    let txt = md.toString()
    for (let id in lookup)
      txt = txt.replace(lookup[id].rx, `](${lookup[id][media]})`)

    return txt
  }

}


let mdCache = {}
const fsMD = id => {
  if (!mdCache[id])
    mdCache[id] = readFileSync(join(config.templates.dirs.md[0],`${id}.md`))  //, {encoding:'utf8'}

  return mdCache[id]
}


const markdown = {

  markup: txt => safeStr(marked(txt)),

  md_law: txt => safeStr(marked(txt
               .replace(/\nMaximum penalty/g, `  \n**Maximum penalty**`)
               .replace(/penalty units/g, `**Penalty units**`)
               .replace(/penalty/g, `**penalty**`)
               .replace(/is liable to/g, `  **is liable to**`)
               .replace(/\n\n/g, `\n`)
               // .replace(/\n/g, `  \n`)
               .replace(/\((i|ii|iii|iv|v|vi)\)/g, '>>> 1.')
               .replace(/\([a-z]\)/g, '>> 1.')
               .replace(/\([1-9]\)/g, '> 1.')
               // .replace(/\(7\)/g, '1.')
               // .replace(/\(a\)/g, '  1.')
               // .replace(/\(b\)/g, '  1.')
               // .replace(/\(c\)/g, '  1.')
               // .replace(/\(d\)/g, '  1.')
               // .replace(/\(e\)/g, '  1.')
               // .replace(/\(f\)/g, '  1.')
               // .replace(/\(g\)/g, '  1.')
               // .replace(/\(h\)/g, '  1.')
                 )),

  md_mail: txt => {
    let mail = marked(txt)
    mail = mail.replace(/Subject: /g, '<br />') //<b>Sub</b> ')
               .replace(/From: /g, '')
               .replace(/(Sent|Date): /g, ' <u>on ')
               .replace(/To\: /g, '</u><u>to</u> ')
               .replace(/CC\: /ig, ' <u>CC</u> ')
               .replace(/\bfuck/ig, '<u><b>FUCK</b></u>')
               .replace(/bullshit/ig, '<u><b>BULLSHIT</b></u>')
               .replace(/\bshit/ig, '<u><b>SHIT</b></u>')
               .replace(/<img src/g, '<imd src')


    return safeStr(mail)
  },

  md_web: id => safeStr(`<div id='${id}'>
    ${marked(chapters.linkify(fsMD(id)))}</div>`),

  md_print: id => safeStr(`<div id='${lookup[id].p.replace('#','')}'>
    ${marked(chapters.linkify(fsMD(id),'p'))}</div>`)

}


const datetime = {

  day: time =>
    safeStr(moment(time).format('MMM DD')),

  dayIso: time =>
    safeStr(moment(time).format('YYYY-MM-DD')),


  daytime: time =>
    safeStr(moment(time).format('HH:mm <b>MMM DD</b> YYYY')),

  tzIso: (time, tz) => {
    let today = moment.tz(tz.id).startOf('day').unix()
  //     let t = moment.unix(post.time).tz(post.tz.id)
  //     return `<time>${t.format('MMM')} <i class="fa fa-calendar-o" aria-hidden="true"><b>${t.format('DD')}</b></i></time> <em>${climbing} on <b>${t.format('ddd')}</b></em> `
  },

  idAgo: id =>
    safeStr(moment(honey.util.BsonId.toDate(id)).fromNow())

}


const msg = {

  atchd: file => {
    let parts = file.replace(/ /g,'').split('.')
    let ext = parts.pop()
    return safeStr(`<b>${parts.join('.')}</b>.${ext}`)
  },

  btw: str =>
    safeStr(marked(str
               // .replace(/>/i,'<i>to</i>')
               // .replace('CC','<i>CC</i>')
               // .replace('**','<b>').replace('**','</b>')
               // .replace('**','<b>').replace('**','</b>')
               // .replace('*','<i>').replace('*','</i>')
               // .replace('*','<i>').replace('*','</i>')
               // .replace(/\,/g,'<i>,</i>')),
               .replace(/\,/g,'')
               .replace(/;/g,'')
            )),
}


module.exports = assign({},markdown,datetime,msg,chapters)
