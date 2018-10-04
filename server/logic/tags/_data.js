const Views = {
  cached: '_id slug name short',
  search: { _id:1, name:1, slug:1, desc:1, short:1, score: { $meta: "textScore" } }
}


const Query = {
  search(term) { return { $text: { $search: '\"'+term+'\"' } } }
}


const Opts = {
  cached:       { select: Views.cached },
  sortByName:   { sort:   { name:1 } },
  search:       { select: Views.search,
                  limit:  10,
                  sort:   { score: { $meta: "textScore" } } }
}


const Projections = ({select,util},{chain}) => ({})



module.exports = { Views, Query, Opts, Projections }
