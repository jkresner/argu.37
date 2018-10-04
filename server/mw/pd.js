// pd == "page data"
module.exports = (app, mw) =>

  (path, opts) => {
    if (path.split('.').length == 1)
      path = `${path}.${path}`

    if (opts == 'query')
      opts = { params:['query'] }

    return mw.data.page(path, opts)
  }

