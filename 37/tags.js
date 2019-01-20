// strata sa sc oc lot tenant 
// order action offence crime duty 
// def build liable tech
let t0 = require('./2018-09/tags.0')

// reg
let t1 = require('./2019-01/tags.1')

let _init = t0._init.concat(t1._init)
module.exports =assign({}, t0, t1, {_init})
