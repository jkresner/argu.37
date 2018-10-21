const Views = {
  cached: '_id uri key title type tmpl parts tags laws contents set history',
  // search: { _id:1, name:1, slug:1, desc:1, short:1, score: { $meta: "textScore" } }
}

const Query = {
  cached: {}
}

const Opts = {
  cached:       { select: Views.cached }
}


const Projections = ({select,util},{chain}) => ({})



module.exports = { Views, Query, Opts, Projections }
