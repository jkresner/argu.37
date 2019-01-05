module.exports = {

  atchId: function(file) {
    let parts = file
      .replace(/ /g,'')
      .split('.')
    let ext = parts.pop()
    return parts.join('.') +'.' +ext
  },

  mapcrypt: function() {
    var maps = Object.values(arguments)
    var str = maps.shift().toString()
    if (!str.replace) return
    if (!maps.length) return str

    // $log(`mapcrypt.str.in :: "${str.dim}"`.white)
    // $log('mapcrypt.maps'.white, maps)

    maps.forEach(function(map) {
      // console.log('mapcrypt.map'.dim, map)
      Object.keys(map).forEach(function(mapped) {
        str = str.replace(map[mapped], mapped)
      })
    })
    return str
  },

  navId: function(id) { 
    var str = id.toString()
    return str.length > 12 ? str.substring(str.length-12) : str
  }

}
