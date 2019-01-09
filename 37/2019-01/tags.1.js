// reg gov loss bi bm con cc

const tags = {
  reg: {
    _id:     ID("5ba3b2a48e32d36ba15e1f26"),
    name:    `Legal regulation`,
    short:   'reg',
    slug:    `legal-regulation`,
    desc:    `Something expected or required by legal obligation.`,
    scope:   `law`,
    tokens:  `legal,regulate,regulatory`
  },
  gov: {
    _id:     ID("5ba3b2a48e32d36ba15e2f26"),
    name:    `Government`,
    short:   'gov',
    slug:    `government`,
    desc:    `.`,
    scope:   `law,content,source`,
    tokens:  `nsw,australian,au,federal,council,local`
  },
  loss: {
    _id:     ID("5ba3b2a48e32d36ba15e1f27"),
    name:    `Losses`,
    short:   'loss',
    slug:    `loss`,
    desc:    `any reasonable cost to any victim, including the cost of responding to an offense, conducting a damage assessment, and restoring the data, program, system, or information to its condition prior to the offense, and any revenue lost, cost incurred, or other consequential damages incurred because of interruption of service.`,
    scope:   `law,regulation`,
    tokens:  `expense,damage,damaged,loss,cost,costs`
  },
  bi: {
    _id:     ID("5ba3b2a48e32d36ba15ecf51"),    
    name:    `Building inspector`,
    short:   'eng',
    slug:    `engineer`,
    desc:    'Qualified Person appointed as inspector for building work quality assurance.',
    scope:   `law,source,content`,
    tokens:  `Eng,Engineer,Foreman,Bellmont,inspectors,expert`
  },
  bm: {
    _id:     ID("5ba3b2a48e32d36ba15ecf29"),
    name:    `Building Manager`,
    short:   'building-manager',
    slug:    `building-manager`,
    desc:    `A person who assists in managing common property, including maintenance and repairs.`,
    scope:   `law,source,content`,
    tokens:  `Manager`
  },
  con: {
    _id:     ID("5ba3b2a48e32d36ba15ecf49"),
    name:    `Builder`,
    short:   'builder',
    slug:    `builder`,
    desc:    `Contractor whom or on whose behalf building work was carried out`,
    scope:   `law,source,content`,
    tokens:  `Contractor,developer,mdp,tradie`
  },
  cc: {
    _id:     ID("5ba3b2a48e32d36ba15ece51"),    
    name:    `Concrete cancer`,
    short:   'cc',
    slug:    `concrete-cancer`,
    desc:    'Expanding and racking concrete from rusted re-bar.',
    scope:   `source,content`,
    tokens:  `Spalling,rust,waterproofing`
  }
}

module.exports = assign(tags, { _init: Object.values(tags) })
