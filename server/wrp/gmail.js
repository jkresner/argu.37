let userId = 'me'

var wrapper = {


  name: 'gmail',


  init() {
    const google = require('googleapis').google
    let {accessToken,refreshToken} = honey.cfg('wrappers.gmail')
    let {clientID,clientSecret} = config.auth.oauth.google
    let auth = new google.auth.OAuth2(clientID, clientSecret)
    auth.credentials = {access_token:accessToken,refresh_token:refreshToken}
    this.api = google.gmail({ version: 'v1', auth })
  },

  getMsg(id, opts, cb)
  {
    let q = {userId,id}
    this.api.users.messages.get(q, (e,r) => e?cb(e):cb(null, r.data))
  },

  getTheadMsgs(id, cb)
  {
    let q = {userId,id}
    this.api.users.threads.get(q, (e,r) => e?cb(e):cb(null, r.data))
  },

  downloadAttach(id, messageId, cb) {
    let q = {userId,id,messageId}
    this.api.users.messages.attachments.get(q,
      (e,r) => e?cb(e):cb(null, new Buffer(r.data.data, 'base64')))
  },

  // userId, includeSpamTrash, labelIds, maxResults, pageToken, q, alt, fields,
  listMsg(opts, cb)
  {
    // $log('listMsg.opts', opts)
    let q = {userId}

    if (!cb) { cb = opts; opts = {} }
    if (opts.labelIds) q.labelIds = opts.labelIds
    if (opts.pageToken) q.pageToken = opts.pageToken
    if (opts.maxResults) q.maxResults = opts.maxResults > 100 ? 100 : opts.maxResults

    // console.log('message.query'.blue, JSON.stringify(q))
    this.api.users.messages.list(q, (e, r) => {
      if (e) return cb(e) && console.log('e'.red, e)

      let {messages,resultSizeEstimate,nextPageToken} = r.data
      // $log(`messages.list(r[${messages.length}])`.green, resultSizeEstimate, `=>` , nextPageToken)
      // $log('r.messages:n\n', messages)

      if (nextPageToken && opts.maxResults >= messages.length)
        this.listMsg(assign(q,opts,{pageToken:nextPageToken}),
          (e2, r2) => cb(e2, e2?null:messages.concat(r2)))
      else
        cb(null, messages)
    })
  }


}


module.exports = wrapper
