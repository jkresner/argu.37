module.exports = {

  mup: function(md, ops) {
    ops = ops||{}
    let compiler = ops.compiler || ops.marked || marked
    return compiler('  \n'+md)
  }

}
