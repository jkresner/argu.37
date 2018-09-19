module.exports = {


  shortId: id => id.substr(12,4),


  pseudofy(str, replacers) {
    if (!str.replace) return

    for (let pseudonym in replacers)
      str = str.replace(replacers[pseudonym], pseudonym)

    return str
  },


  htmlEncode: str =>  //safeStr(
      str.replace(/[\u00A0-\u9999<>\&]/gim, i => `&#${i.charCodeAt(0)};`)
      //)


}
