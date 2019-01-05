const Lookup = { authority: require('../../../37/authority') }


const Views = {
  list: "_id is of in at ttl title name body see tags",
  cache: "_id ttl title name" }


const Query = {
  laws(op) {
    let q = {}
    let l = op.legislation || null
    if (op.of) q.of = op.of
    else if (l) {
      if (/^crim/i.test(l)) q.of = {$in:['CA00','CA07','CL04']}
      if (/^prop/i.test(l)) q.of = {$in:['PA02','PA14']}
      if (/^strata/i.test(l)) q.of = {$in:['SD15','SM96','SM15','SM16']}
    }
    if (op.at) {
      q.at = op.at
    } else if (op.in) {
      q.in = op.in
    }
    return q
  }
}


const Opts = {
  list:         { select: Views.list, sort: { of: 1, at: 1} },
  cache:        { select: Views.cache } }


const Projections = ({select,util,id,inflate},{chain,view}) => ({

  tags: r => assign(r, {
    tags:r.tags.map(t=>CAL['tagIdx'][t._id]) }),

  crumb: l => assign(l, {
    elmId: l.ttl.replace(':','__'),
    crumb: `${Lookup.authority[l.of]} `
         + `${l.in.replace("P",   ' • Part ')
                  .replace("Sch", ' • Schedule ')
                  .replace("'D",  ' • Division ')}  `
            }), // + ` • Sec ${l.at} + `


  list: r => chain(r, 'tags','crumb'),

  authority: d => {
    let aut = {}
    chain(d.laws, 'tags','crumb').forEach(l=>{
      aut[l.of] = aut[l.of] || []
      aut[l.of].push(l)
    })
    return Object.keys(aut).map(key => assign({key},{
      title: Lookup.authority[key], laws: aut[key] }))
  },

})

module.exports = { Views, Query, Opts, Projections }
