var srcs = require('../src') 


module.exports = {

  init:  [].concat(  Object.values(require('./docs0')) ,
                     Object.values(require('./imgs0')) ),

  cleaned: require('./inbox0'),


  ignore: srcs.ignore
 
}
