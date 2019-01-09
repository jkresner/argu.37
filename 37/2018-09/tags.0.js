// strata sa sc oc lot tenant order action offence crime duty def build liable tech

const tags = {
  strata: {
    _id:     ID("5ba3b2a48e32d36ba15ecf01"),
    name:    `Strata Living`,
    short:   'strata',
    slug:    `strata-living`,
    desc:    `The experience`,
    scope:   `content`,
    tokens:  `Fair,Trading,Strata`
  },
  sa: {
    _id:     ID("5ba3b2a48e32d36ba15ecf10"),
    name:    `Strata Agent`,
    short:   'sa',
    slug:    `strata-agent`,
    desc:    `Manager helps with administration of Strata Scheme`,
    scope:   `law,source,content`,
    tokens:  `manage,manager,agent,sma`
  },
  sc: {
    _id:     ID("5ba3b2a48e32d36ba15ecf11"),
    name:    `Strata Committee`,
    short:   'sc',
    slug:    `strata-committee`,
    desc:    ``,
    scope:   `law,source,content`,
    tokens:  `ec,executive,office,committee,com,elect,members`
  },
  oc: {
    _id:     ID("5ba3b2a48e32d36ba15ecf12"),
    name:    `Owners Corporation`,
    short:   'oc',
    slug:    `owners-corporation`,
    desc:    ``,
    scope:   `law,source,content`,
    tokens:  `owners,body,corporate,strata,neighb`
  },
  lot: {
    _id:     ID("5ba3b2a48e32d36ba15ecf13"),
    name:    `Lot owner`,
    short:   'lot',
    slug:    `lot-owner`,
    desc:    ``,
    scope:   `law,source,content`,
    tokens:  `owner,own,strata`
  },
  tenant: {
    _id:     ID("5ba3b2a48e32d36ba15ecf14"),
    name:    `Lot tenant`,
    short:   'tenant',
    slug:    `lot-tenant`,
    desc:    `a person renting and occupying a lot; "lessee".`,
    scope:   `law,source,content`,
    tokens:  `occupant,resident,rent,renter,tenancy,lessee`
  },
  order: {
    _id:     ID("5ba3b2a48e32d36ba15ecf15"),
    name:    `Court order`,
    short:   'order',
    slug:    `court-order`,
    desc:    ``,
    scope:   `law,source,content`,
    tokens:  `ncat,district,supreme`
  },
  action: {
    _id:     ID("5ba3b2a48e32d36ba15ecf25"),
    name:    `Legal action`,
    short:   'action',
    slug:    `legal-action`,
    desc:    ``,
    scope:   `law,source,content`,
    tokens:  `litigate,court,tribunal,ncat,application,mediation,demand`
  },
  offence: {
    _id:     ID("5ba3b2a48e32d36ba15ecf16"),
    name:    `Legal offence`,
    short:   'offence',
    slug:    `offence`,
    desc:    ``,
    scope:   `law`,
    tokens:  `off,illegal,breach`
  },
  crime: {
    _id:     ID("5ba3b2a48e32d36ba15ecf26"),
    name:    `Criminal offence`,
    short:   'crime',
    slug:    `criminal-offence`,
    desc:    ``,
    scope:   `law,source,content`,
    tokens:  `crime,police`
  },

  duty: {
    _id:     ID("5ba3b2a48e32d36ba15ecf17"),
    name:    `Legal duty`,
    short:   'duty',
    slug:    `legal-duty`,
    desc:    `Something expected or required by legal obligation.`,
    scope:   `law,content`,
    tokens:  `legal`
  },
  def: {
    _id:     ID("5ba3b2a48e32d36ba15ecf18"),
    name:    `Legal definition`,
    short:   'def',
    slug:    `legal-definition`,
    desc:    `The act of defining, or of making something definite, distinct, or clear`,
    scope:   `law,content`,
    tokens:  `definition`
  },
  build: {
    _id:     ID("5ba3b2a48e32d36ba15ecf22"),
    name:    `Building work`,
    short:   'build',
    slug:    `build`,
    desc:    `The act, business, or practice of constructing and improving buildings`,
    scope:   `law,source,content`,
    tokens:  `Residential,Eng,Engineering,Contractor,Remedial,Builder,Work`
  },
  liable: {
    _id:     ID("5ba3b2a48e32d36ba15ecf44"),
    name:    `Liability`,
    short:   'liable',
    slug:    `liability`,
    desc:    `Legal responsibility`,
    scope:   `law,source,content`,
    tokens:  `Risk,Financial,Legal,Precedence`
  },
  tech: {
    _id:     ID("5ba3b2a48e32d36ba15ecf46"),
    name:    `Software infrastructure`,
    short:   'tech',
    slug:    `strata-software`,
    desc:    `Software tools and information for owners corporations and strata owners`,
    scope:   `source,content`,
    tokens:  `Soft`
  }
}

module.exports = assign(tags, { _init: Object.values(tags) })
