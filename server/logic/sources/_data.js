// Move into logic / make dynamic
const jk_sets               = require('../../../37/2019-01/sets.jk')
const jk_filters            = Object.keys(jk_sets).sort()

const {gmail}               = require('../../../37/gmail')
const {gmailUp}             = require('../../../37/2019-01/inbox1')


const Lookup                                                                 = {

cdn_atchd:    `${config.http.static.host}/${config.http.static.cdn.atchd}`     ,
mime_css: {   jpg:'img',jpeg:'img',png:'img',pdf:'pdf',doc:'docx',docx:'docx'  },
atch_ignore:  /((image0\d\d)|(\~WRD\d\d\d|twitter|facebook|linkedin))\.(gif|jpg|jpeg|png)/i }


const Views                                                                  = {

item:         '_id is render name title author published uri threadId md data tags laws notation',
list:         '_id is render name title author published uri threadId md data tags laws' }


const Opts                                                                   = {

list: {       select: Views.list, sort:{published:-1}                          },
param: {                                                                       },
item: {       select: Views.item                                               }}


const Query                                                                  = {

existing: {
  id:         id => assign({},{_id:id})                                        ,
  gmail:      name => assign({type:'gmail'},{name})                            },
gmail: {      ignore: {$exists:0}, type: 'gmail'                               },
published: {  ignore: {$exists:0}, published: {$exists:1}                      },
threads:      (limit, newest) => {
  if (!cache['threads']) cache['threads'] = gmail.threads; // hack (not great)
  let all = Object.keys(cache['threads'])  // .filter(id => threads[id].p == 0)
  let ids = newest ? _.reverse(_.takeRight(all, limit)) : _.take(all, limit)
  // $log('threads'.yellow, ids.length, limit, newest)
  return { 'threadId': { $in: ids } }                                          }}


const Projections = ({select,pl8},{chain,view}) => ({

  // saving gmail imported data to DB (as valid source)
  gmail_db: msg => assign({ render:'gmail', is:'comm' },
    { name: msg.id,
      threadId: msg.threadId,
      uri: `mail.google.com/mail/u/0/#inbox/`+msg.id,
      published: parseInt(msg.internalDate),
      title: msg.payload.headers.filter(h => /Subject/i.test(h.name))[0].value || "-No subject-",
      author: msg.payload.headers.filter(h => /From/i.test(h.name))[0].value,
      data: _.omit(msg, 'labelIds') }),


  //-- TODO: authorization / tracker url forwarder/middleman
  atchdUrl: f => assign(f, { url:
    `${Lookup.cdn_atchd}/${f.name}_${encodeURI(f.filename)}` }),

  fileUrl: f => assign(f, { url:
    `${Lookup.cdn_atchd}/${encodeURI(f.filename)}` }),



  fileInfo: src => assign(src, { file: assign({ title: src.title,
      name: src.data.filename.split('__').pop(),
      fullname: src.data.filename,
      mime: src.data.mimeType,
      size: src.data.size }
    , select(chain(src.data, 'fileUrl'),'url')
    , src.data.aliases?{alias:src.data.aliases}:{} ) }),

  body: src => assign(src, { md: assign(src.md, {
                body: pl8('source_figure', src) }) }),

  typed: src => {
    $log(`typed_${src.render}`)
    return 
    _.omit(chain(assign(src,{md:src.md||{}}),`typed_${src.render}`), ['data'])
  },

  typed_img: src => chain(src,'fileInfo','body'),
  typed_doc: src => chain(src,'fileInfo','body'),
  typed_snippet: src => chain(src,'fileInfo','body'),
  typed_gmail: src => {
    let gmail = { attached:[] }
    src.data.payload.headers
      .filter( ({name}) => /^(to|from|cc|subject|date)$/i.test(name) )
      .forEach( ({value,name}) => gmail[name.toLowerCase()] = value )

    if (!src.md) { src.md = {} }

    (function inspectPayload(load) {
      let {mimeType,parts,body,filename} = load
      if (parts)
        parts.forEach(
          mimeType != "multipart/alternative"
            ? inspectPayload
            : (p => {
              if (p.mimeType != 'text/plain') inspectPayload(p)
              else {
                let txtPart = parts.filter(pp => p)[0]
                if (txtPart.body.size == 0) src.md.raw = '--empty body--'
                else gmail.text64 = txtPart.body.data
              }}))
      else if (/text\/(plain|html)/i.test(mimeType)) {
        // $log('inspPl.mType.txt_htm'.magenta, mimeType)
        if (!gmail.text64) {
          if (body.size == 0) src.md.raw = '--empty body--'
          else gmail.text64 = body.data
        }
        // gmail.text64 = body.data || null
        // if (body.size != 0) { gmail.text64 = body.data } else {  }
        // else $log('gmail.typed.body'.magenta, r.data)
      }
      else if (filename) {
        let fbts = filename.replace(/[ ,'()]/g,'').split('.')
        let ext = fbts.pop()
        let lb = fbts.join('.')
        if (!Lookup.atch_ignore.test(filename))
          gmail.attached.push({ name:src.name, filename, lb, ext,
            css: Lookup.mime_css[ext], kb: parseInt(body.size/1024) })
      }
      else if (/rfc822/i.test(mimeType)) {}
      else $log('?mimeType'.red, mimeType, load, 'mail', src.data)
    })(src.data.payload)

    if (!src.md.raw) src.md.raw = Buffer.from(gmail.text64, 'base64').toString()
    return gmailUp(assign(src,{gmail}))
  },


  item: r => chain(r, 'typed'), //, 'annotate'),
  param: r => r,

  list_vd: d => {
    let op      = d.ops||{},
        trdz    = {},
        timz    = d.sources.map(s=>moment(s.published))
    let ui      = { stack:  op.mode||'off', // threads | ?file
                    order:  op.newest ? 'chronology' : 'history',
                    render: op.raw?'raw':'edits',
                    ul:     'adm_srcs' },
        agg     = { src:    d.sources.length  },
        time    = { first:  moment.min(timz), last: moment.max(timz) }

    time.days = parseInt(moment.duration(time.last.diff(time.first)).asDays())
    // time.days = parseInt(moment.duration(moment(time.last).diff(moment(time.first))).asDays())

    for (let s of d.sources) {
      trdz[s.threadId] = (trdz[s.threadId]||0)+1
      agg[s.is]       = (agg[s.is]||0)+1
    }
    agg.thread = Object.keys(trdz).length
    // agg.threads = trdz

    return {filters:jk_filters, ui, agg, time}
  },


  list: d => {
    let threads = {}, runThread,
        sources = chain(d.sources, 'typed') //.filter(s => !s.skip)
        vd = chain(d, 'list_vd')

    // mmmmmm ? hack
    vd.threads = []

    function aggThreadSrc(s) {
      let {threadId} = s
      if (!/thread/.test(d.ops.mode)) {
        s.threadSwap = runThread != threadId
        runThread = threadId
      } else if (!threads[threadId])
        s.threadSwap = true

      let {messages, atchd} = threads[threadId] || { idx: vd.threads.push(threadId) }
      atchd = (atchd||[]).concat((s.attached||[]).map(f=>f.file))
      messages = (messages||[]).concat([s])

      let start = messages[0].time, end = messages[messages.length-1].time
      let dur = moment.duration(moment(end).diff(moment(start)))
      let days = parseInt(dur.asDays())
      let subject = days >= 0 ? messages[0].subject
                              : ((s.gmail||{}).subject||s.title)
      if (days < 0) days = days * -1
      threads[threadId] = assign({ messages, subject, start, end, days },
        atchd.length > 0 ? {atchd} : {})

      return s
    }

    let list = sources.map(s => {
      let {threadId,md,name,gmail} = s
      // let rdr = s.render
      let subject = s.title
      if (s.gmail) subject = s.gmail.subject
      if (s.file) subject = s.file.name

      if (s.file)
        md.fileinfo = `<tt>• ${s.author}</tt>`
      // if (d.ops.raw)
        // delete md.body
      // else
      md = chain(s, 'pseudofix')


      let attached = !gmail ? null : gmail.attached
          .filter( f => ((threads[threadId]||{}).atchd||[]).indexOf(f.filename) < 0 )
          .map( f => chain(assign(f,{preview:md[f.filename]}),'atchdUrl') )

      // if (m.oneill) sets.oneill.push(name) -- hardcode in jk.sets?

      return aggThreadSrc(
        assign(md, { attached, name, threadId, subject, //orig: m.gmail,
          tis: s.is+' '+s.render, _id: s._id, uri: s.uri, time: s.published }))
    })

    if (/thread/.test(d.mode)) {
      list = []
      for (let id of vd.threads)
        list = list.concat(threads[id].messages)
      // $log(`gmailMsgs[${d.mode}_mode].thread`.yellow, threads[id].length, id, threads[id][0].subject)
    }

    vd.threads = vd.threads.map(tId => assign(threads[tId],
          { id: tId , messages: threads[tId].messages.map(m => m.name) } ))

    if (config.log.verbose) {
      $log('sources.viewData:'.magenta, _.omit(vd,['threads']))
      $log('sources[0]:'.magenta, sources[0])
      for (let t of vd.threads) $log(`'${t.id}'`.dim+`:\{ p:0, t:"${moment(t.start).format('YYMM-DD')}:${t.days}d<${t.messages.length}>${t.subject}"},`)
    }

    return {vd,sources,list,filtered:jk_sets}
  },

  pseudofix: src => {
    let r = {}
    let {psudo,alias} = CAL['templates_cached']

    if (src.gmail) {
      r.raw = src.md.raw
      let m = src.gmail
      let btw = pl8('mail_btw', m)
      src.md.between = pl8('mapcrypt', btw, psudo)
      if (/(@|'|")/.test(src.md.between))
        $log('map.miss'.magenta, src.md.between, m.from.dim, m.to.dim, (m.cc||'CC:none').dim)
    }

    Object.keys(src.md)
          .filter( key => key != 'raw' )
          .forEach( key => r[key] = pl8('mapcrypt', src.md[key], alias)
              .replace(/\]\(\_\_/g,`](${Lookup.cdn_atchd}/${src.name}__`) )

    return r
  }

  /*listGmail: d => {
    let threads = {}, runThread = null
    let messages = chain(d.sources, 'typed').filter(m => !m.skip)
    let meta = assign(chain(d, 'list_meta'), { messages: messages.length, threads: [], mode: d.mode, view: d.raw?'raw':'normal' })
    function aggThreadMsg(m) {
      let {threadId} = m
      if (/thread/.test(d.mode)) {
        if (!threads[threadId]) { m.threadSwap = true }
      } else { m.threadSwap = runThread != threadId
               runThread = threadId }
      let {messages, atchd} = threads[threadId] || { idx: meta.threads.push(threadId) }
      atchd = (atchd||[]).concat(m.attached.map(f=>f.file))
      messages = (messages||[]).concat([m])
      let start = messages[0].time, end = messages[messages.length-1].time
      let dur = moment.duration(moment(end).diff(moment(start)))
      let days = parseInt(dur.asDays())
      let subject = days >= 0 ? messages[0].subject : m.subject
      if (days < 0) days = days * -1
      threads[threadId] = assign({ messages, subject, start, end, days }, atchd.length > 0 ? {atchd} : {})
      return m }
    let set = messages.map(m => {
      let {md,name} = m
      let {threadId,subject,to,cc} = m.gmail
      if (d.raw) { delete md.body
        md.between = tmpl.mail_btw(m.gmail)
      } else md = chain(m, 'pseudofix')
      let attached = m.gmail.attached
        .filter( f => ((threads[threadId]||{}).atchd||[]).indexOf(f.file) < 0 )
        .map( f => assign({ name, preview: md[f.file] }, f) )
        .map( f => assign({ url: chain(f,'fileUrl') }, f) )
      if (m.oneill) sets.oneill.push(name)
      return aggThreadMsg(assign(md, { attached, name, threadId, subject, _id: m._id, uri: m.uri, time: m.published })) })

    if (/thread/.test(d.mode)) { set = []
      for (let id of meta.threads)
        set = set.concat(threads[id].messages) }

    meta.set = set.length
    meta.threads = meta.threads.map(tId => assign(threads[tId], { id: tId , messages: threads[tId].messages.map(m => m.name) } ))

    let r = {messages,set,meta,sets}//setName:setKey||'mail-all'}}
    return r }*/

})

module.exports = { Views, Query, Opts, Projections }
