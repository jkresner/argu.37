// reg

const tags = {


  reg: {
    _id:     ID("5ba3b2a48e32d36ba15e1f26"),
    name:    `Legal regulation`,
    short:   'reg',
    slug:    `legal-regulation`,
    desc:    `Something expected or required by legal obligation.`,
    scope:   `law,regulation`,
    tokens:  `legal,regulate,regulatory`
  },


  gov: {
    _id:     ID("5ba3b2a48e32d36ba15e2f26"),
    name:    `Government`,
    short:   'gov',
    slug:    `government`,
    desc:    `.`,
    scope:   `law,regulation`,
    tokens:  `nsw,australia,federal,council,local`
  },



}

module.exports = assign(tags, { _init: Object.values(tags) })
