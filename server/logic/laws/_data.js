const Lookup = { authority: {
  CA00: "Crimes Act 1900 [NSW]",
  CA07: "Crimes (Domestic and Personal Violence) Act 2007 [NSW]",
  CL04: "Crimes Legislation Amendment (Telecommunications Offences) Act 2004",
  DA05: "Defamation Act 2005 [NSW]",
  PA02: "Property, Stock and Business Agents Act 2002",
  PA14: "Property, Stock and Business Agents Regulation 2014",
  SD15: "Strata Schemes Development Act 2015",
  SM15: "Strata Schemes Management Act 2015",
  SM16: "Strata Schemes Management Regulation 2016" }}


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
    return q
  }
}


const Opts = {
  list:         { select: Views.list },
  cache:        { select: Views.cache } }


const Projections = ({select,util,id,inflate},{chain,view}) => ({

  tags: r => assign(r, {
    tags:r.tags.map(t=>CAL['tagIdx'][t._id]) }),

  crumb: l => assign(l, {
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
