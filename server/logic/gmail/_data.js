const render = 'gmail'
const is     = 'comm'
/*
 */
const Views  = {}
/*
 */
const Opts   = {}
/*
 */
const Query  = { 
  existing: { gmail: name => assign({render},{name}) },
  gmail: { ignore: {$exists:0}, render }
}
/*
 */
const Projections = ({select},{chain}) => ({

  // gmail imported msg data as source
  db: msg => 
    // $log('gmail.db'.yellow, msg.id, msg.snippet)
    assign({ render, is }, {
      name: msg.id,
      threadId: msg.threadId,
      uri: `mail.google.com/mail/u/0/#inbox/`+msg.id,
      published: parseInt(msg.internalDate),
      title: msg.payload.headers.filter(h => /Subject/i.test(h.name))[0].value || "-No subject-",
      author: msg.payload.headers.filter(h => /From/i.test(h.name))[0].value,
      data: msg
    })
  ,
  
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
