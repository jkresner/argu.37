var fcd  = require('focusd')

var fns = {

  mup_mail: function(md) {
    return md
      .replace(/<img src/g, '<imd src') // <imd> (delay image load)
  //     // .replace(/\bfuck/ig, '<u><b>FUCK</b></u>')
  //     // .replace(/bullshit/ig, '<u><b>BULLSHIT</b></u>')
  //     // .replace(/\bshit/ig, '<u><b>SHIT</b></u>')
  }
  
}

function mup(str, ops) {
  var opts = {}
  ops = ops || opts
  opts.baseUrl = ops.baseUrl || null
  opts.headerIds = ops.headerIds || false
  opts.headerPrefix = ops.headerPrefix || null
  // ops.renderer = // obj containing fns to render tokens to HTML
  let markup = ops.compiler || ops.marked || marked
  // console.log('== MD input ======\n'.cyan+str+'\n=================='.cyan)
  return markup(str, opts).trim()
}


Object.keys(fns).forEach(function(f) {
  var fn = fns[f]
  fns[f] = function(str, ops) { return mup(fn(str), ops) }
})

var pos = 0
fns.markup = function(src) {
  pos++;
  // console.log("markup", src.subject)
  if (/comm/.test(src.tis))
    return fns.mup_mail(src.body||src.snippet)
  else if (/img/.test(src.tis)) {
    // console.log(pos, "img.markup", src.name)
    return fns.mup_mail(src.body)
  } else if (/doc/.test(src.tis)) {
    // console.log(pos, "doc,markup", src.subject)
    return fcd.fig(src.body,'doc',src.name)
  }
  else
    console.log('ohww', src.tis)
}


fns.VD = function(ctx) {
 // console.log('VD'.yellow, ctx.data.root.vd))  
 return '<script> window.vd = '+
    JSON.stringify(ctx.data.root.vd||{})+'; </script>';
}


module.exports = fns
