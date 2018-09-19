const $exists               = true
const {gmailUp}             = require('./data/_gmail')
const docs                  = require('./data/_doc')
const imgs                  = require('./data/_img')
const {pseudofy,htmlEncode} = require('../../../template/helper/encode')
const {sudo,sudoL2}         = require('./data/_psudo')
const pseudo                = str => pseudofy(str, sudo),
     pseudo2                = str => pseudofy(str, sudoL2)

// Move into logic / make dynamic
const sets                  = require('../sets/_data.jk')



const Views = {
  item:      '_id type render name title author published uri data md gmail',
  list:      '_id type render name title author published uri data md gmail',
  atchd_ignore: /((image0\d\d)|(\~WRD\d\d\d|twitter|facebook|linkedin))\.(gif|jpg|jpeg|png)/i,
}


const Query = {
  existing: {       id: id => assign({},{_id:id}),
                    gmail: name => assign({type:'gmail'},{name})  },
  gmail:            { type: 'gmail', ignore: {$exists:0} },
  published:        { published: {$exists}, ignore: {$exists:0} },
  threads: (limit, newest) => {
    if (!cache['threads']) cache['threads'] = // hack (not great)
      require('../../../cmd/tool/import/data/gmail/threads')
    let all = Object.keys(cache['threads'])  // .filter(id => threads[id].p == 0)
    let ids = newest ? _.reverse(_.takeRight(all, limit)) : _.take(all, limit)
    // $log('threads'.yellow, ids.length, limit, newest)
    return { 'data.threadId': { $in: ids } }
  }
}


const Opts = {
  existing:     { select: Views.item },
  list:         { select: Views.list, sort: { published: -1 } },
  item:         { select: Views.item },
}


const Projections = ({copy,select,util},{chain,view}) => ({


  typed: r => {
    // console.log('typed', r.type, r.name)
    r = chain(r,`typed_${r.render}`)
    delete r.data
    return r
  },

  item: r => chain(r, 'typed'),
  list: d => chain(d, 'typed'),

  list_meta: d => {
    // console.log('list_meta'.cyan, d.sources)
    let list = d.sources
    let times = list.map(m=>moment(m.time))
    let newest = d.newest||(d.ops||{}).newest
    let meta = { count:  list.length }
    meta.filters = Object.keys(sets).sort()
    meta.time = { first: moment.min(times), last: moment.max(times) }
    meta.time.days = parseInt(moment.duration(moment(meta.time.last).diff(moment(meta.time.first))).asDays())
    meta.newest = newest ? 'newest to oldest' : 'oldest to newest'
    return meta
  },

  listAll: d => {
    let sources = d.sources.filter(s=>s.render == 'gmail')
    // console.log('listAll.messages'.magenta, messages.length, d.opts)
    let dGmail = {sources,opts:d.opt}
    let r1 = chain(dGmail,'listGmail')
    // console.log('listAll.r1.messages'.magenta, r1)
    r = { sources: r1.messages.concat(Object.values(docs), Object.values(imgs)) }
    r.meta = chain(r, 'list_meta')
    r.meta.mode = 'all'
    r.sets = r1.sets
    // r.concat(docs, imgs)
    // sort
    // console.log('listAll.meta', JSON.stringify(r.meta))
    return r
  },

  // TODO move to templates/_data
  pseudofix: source => {
    let {md,render,gmail} = source
    if (render == 'gmail')
      md.between = `**${gmail.from}** to **${gmail.to}**` + (gmail.cc ? ` CC **${gmail.cc}**`: '')

    Object.keys(md)
          .filter(key=>key!='raw')
          .forEach(key=> md[key] =
             pseudo(md[key]).replace(/\]\(\_\_/g,`](/atchd/${source.name}__`))

    if (/(@|'|")/.test(md.between||''))
      $log('b', md.between.dim, to, (cc||'CC:none').gray)
    if (md.body)
      md.body = pseudo2(md.body)
    return md
  },


  // unix: r => assign(r, { time: moment(r.time).unix() }),


  // saving gmail data to DB
  // $log('src.data.gmail_db', data)
  gmail_db: data => assign(
    { render:'gmail', type:'comm' },
    { name: data.id,
      uri: `mail.google.com/mail/u/0/#inbox/`+data.id,
      published: parseInt(data.internalDate),
      title: data.payload.filter(h => /Subject/i.test(h.name))[0].value || "-No subject-",
      author: data.payload.filter(h => /From/i.test(h.name))[0].value,
      data: _.omit(data, labelIds) }),


  typed_gmail: r => {
    let md = r.md||{}
    let {id,threadId,snippet,payload} = r.data
    let {headers} = payload
    let gmail = {id,threadId,snippet,attached:[]}
    // $log('r'.yellow, headers)
    for (var {value,name} of headers) {
      if (/^(to|from|cc|subject|thread-topic|date)$/i.test(name))
        gmail[name.toLowerCase().split('-')[0]] = value
    }

    (function inspectPayload(load) {
      let {mimeType,parts,body,filename} = load

      if (parts) {
        // $log('inspPl.mType'.magenta, mimeType, parts)
        if (mimeType == "multipart/alternative") {
          parts.forEach(p=> {
            if (p.mimeType != 'text/plain') inspectPayload(p)
            else {
              let txtPart = parts.filter(pp => p)[0]
              if (txtPart.body.size == 0) md.raw = '--empty body--'
              else gmail.text64 = txtPart.body.data
            }
          })
        }
        else
         parts.forEach(p=> inspectPayload(p))
      }
      else if (/text\/(plain|html)/i.test(mimeType)) {
        // $log('inspPl.mType.txt_htm'.magenta, mimeType)
        if (!gmail.text64) {
          if (body.size == 0) md.raw = '--empty body--'
          else gmail.text64 = body.data
        }
        // gmail.text64 = body.data || null
        // if (body.size != 0) { gmail.text64 = body.data } else {  }
        // else $log('gmail.typed.body'.magenta, r.data)
      } else if (filename) {
        // $log('inspPl.mimeType.image'.magenta, mimeType, filename)
        if (!Views.atchd_ignore.test(filename)) {
          let data = {file:filename,kb:parseInt(body.size/1024) }
          if (/.(jpg|jpeg|png)$/i.test(filename)) data.type = 'picture'
          else data.type = 'file'
          // if (/.(pdf|docx?)$/.test(filename)) data.type = 'doc'
          gmail.attached.push(data)
          // $log('attached'.red, data.file)
        }
      } else if (/rfc822/i.test(mimeType)) {
      } else {
        $log('mimeType.unknown'.magenta, mimeType, load, 'mail'.magenta, r.data)
      }
    })(payload)

    if (!md.raw) md.raw = Buffer.from(gmail.text64, 'base64').toString()
    return gmailUp(assign(r,{gmail,md}))
  },


  listGmail: d => {
    let threads = {}, runThread = null
    let messages = chain(d.sources, 'typed').filter(m => !m.skip)

    let meta = assign(chain(d, 'list_meta'), {
      messages: messages.length, threads: [],
      mode: d.mode, view: d.raw?'raw':'normal' })

    function aggThreadMsg(m) {
      let {threadId} = m
      if (/thread/.test(d.mode)) {
        if (!threads[threadId]) { m.threadSwap = true }
      } else {
        m.threadSwap = runThread != threadId
        runThread = threadId
      }

      let {messages, atchd} = threads[threadId] || { idx: meta.threads.push(threadId) }
      atchd = (atchd||[]).concat(m.attached.map(f=>f.file))
      messages = (messages||[]).concat([m])

      let start = messages[0].time, end = messages[messages.length-1].time
      let dur = moment.duration(moment(end).diff(moment(start)))
      let days = parseInt(dur.asDays())
      let subject = days >= 0 ? messages[0].subject : m.subject
      if (days < 0) days = days * -1
      threads[threadId] = assign({ messages, subject, start, end, days },
        atchd.length > 0 ? {atchd} : {})

      return m
    }

    let set = messages.map(m => {
      let {md} = m
      let {threadId,subject,to,cc} = m.gmail

      if (d.raw) {
        delete md.body
        md.between = `${htmlEncode(m.gmail.from)} to ${htmlEncode(to)}${cc?' CC '+htmlEncode(cc):''}`
      } else
        md = chain(m, 'pseudofix')

      let attached = m.gmail.attached
        .filter( f => ((threads[threadId]||{}).atchd||[]).indexOf(f.file) < 0 )
        .map( f => assign(f, { preview: md[f.file] }) )   //, file: f.file.replace(/ /g,'')

      // console.log(m.onem.gmail.from, to)
      if (m.oneill) sets.oneill.push(m.name)

      return aggThreadMsg(assign(md, { attached, threadId, subject, //orig: m.gmail,
        _id: m._id, uri: m.uri, name: m.name, time: m.published }))
    })


    if (/thread/.test(d.mode)) {
      set = []
      for (let id of meta.threads)
        set = set.concat(threads[id].messages)
      // $log(`gmailMsgs[${d.mode}_mode].thread`.yellow, threads[id].length, id, threads[id][0].subject)
    }

    meta.set = set.length
    meta.threads = meta.threads.map(tId => assign(threads[tId],
                    { id: tId , messages: threads[tId].messages.map(m => m.name) } ))

    let r = {messages,set,meta,sets}//setName:setKey||'mail-all'}}
    // console.log('filters', meta.sets) //, sets)
    // $log(`projGmail[${d.mode}mode]`.cyan, `q:${meta.messages}`.gray, `set m:${r.meta.set} t:${r.meta.threads.length}`)
    // $log(`gmail[${d.mode}].threads`.yellow, Object.keys(threads).length)
    // for (let t of r.meta.threads) $log(`'${t.id}':\{ p:0, t:"${moment(t.start).format('YYMM-DD')}[${t.messages.length}:${t.days}]${t.subject}"},`)
    return r
  }


})

module.exports = { Views, Query, Opts, Projections }
