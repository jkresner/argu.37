// const usr = require('./_data.jk')
// const {pseudofy} = require('../../../template/helper/pseudo')
// const pseudo = str => pseudofy(str, usr.sudo||{})
// const htmlEncode = str => str.replace(/[\u00A0-\u9999<>\&]/gim, i => '&#'+i.charCodeAt(0)+';')
const mail_sma = /(ben|admin)@oneillstrata/i,
      mail_jsk = /jkresner@gmail/i


const Views = {
  item:      'ref title summary utcStart utcEnd',
  // list:      '_id type name title author published uri data gmail'
}


const Query = {
  // existing: id => assign({name:id}),
}


const Opts = {
  // param: { select: `_id name`, join: { actorId: '_id name' } },
  item: { select: Views.item },
  // list: {  sort: { published: -1 } },
}


const Projections = ({copy,select,util},{chain,view}) => ({

  idToLaw(ids) { return i },

  idToSource(names) { return i.split(' ') },

  oneill: m => {
    if ((mail_sma.test(m.gmail.from) && mail_jsk.test(m.gmail.to)) ||
        (mail_sma.test(m.gmail.to) && mail_jsk.test(m.gmail.from)) ) m.oneill = true
  },


  // pseudo,

  // saving gmail data to DB
  // toDbSrc: data => {
  //   return { title, author, data }
  // },

  item: d => view.item(d),


  list: d => chain(d, view.list),


})


module.exports = { Views, Query, Opts, Projections }
