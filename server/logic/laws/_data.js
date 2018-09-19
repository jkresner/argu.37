const Views = {
  authority: {
    CA00: "Crimes Act 1900 [NSW]",
    CA07: "Crimes (Domestic and Personal Violence) Act 2007 [NSW]",
    CL04: "Crimes Legislation Amendment (Telecommunications Offences) Act 2004",
    PA02: "Property, Stock and Business Agents Act 2002",
    PA14: "Property, Stock and Business Agents Regulation 2014",
    SD15: "Strata Schemes Development Act 2015",
    SM15: "Strata Schemes Management Act 2015",
    SM16: "Strata Schemes Management Regulation 2016"
  }
}


const Query = {}


const Opts = {}


const Projections = ({select,util,id},{chain,view}) => ({


  crumb: l => assign(l, { crumb: `${Views.authority[l.of]} > ` +
    `${l.in.replace('P', 'Part ').replace('.D',' > Division ')}` +
    ` > Section ${l.at}`}),

  listLaw: r => chain(r, 'crumb'),


})

module.exports = { Views, Query, Opts, Projections }
