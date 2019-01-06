var fns = {

  mup_law: function(md) {
    return (`\n`+md) // so we match the first list item
  //     // .replace(/\nMaximum penalty/g, `  \n**Maximum penalty**`)
  //     // .replace(/penalty units/g, `**Penalty units**`)
  //     // .replace(/penalty/g, `**penalty**`)
  //     // .replace(/is liable to/g, `  **is liable to**`)
  //     // .replace(/\n\n/g, `\n`)
  //     // .replace(/\n/g, `  \n`)
  //     // .replace(/\n\s*\((i|ii|iii|iv|v|vi)\)\s*/g, '  \n>>>1. ')
  //     // .replace(/\n\s*\([a-z]\)\s*/g, '  \n>>  1. ')
  //     // .replace(/\n\s*\([1-9]\)\s*/g, '  \n>1. ')
      .replace(/\n\(i\)\s*/g, '\n - ')
      .replace(/\n\s*\((i|ii|iii|iv|v|vi)\)\s*/g, '\n1. ')
      .replace(/\n\s*\([1-9]\)\s*/g, '\n1. ')
      .replace(/\n\s*\([a-z]\)\s*/g, '\n - ')
      .trim()
  //     // .replace(/\n\n/g, `\n`)
  //     // .replace(/\n/g, `  \n`)
  //     // .replace(/  \n/g, `\n`)
  //     // .replace(/\n  \((i|ii|iii|iv|v|vi)\)/g, '\n>>> 1.')
  //     // .replace(/\n  \([1-9]\)/g, '\n> 1.')
  //     // .replace(/\n  \([a-z]\)/g, '\n>> 1.')
  //     // .replace(/\n\([1-9]\)/g, '\n1.')
  //     // .replace(/\n\([a-z]\)/g, '\n-')
  },

  mup_mail: function(md) {
    return md
      .replace(/Subject: /g, '<br />')
      .replace(/From: /g, '')
      .replace(/(Sent|Date): /g, ' <u>on ')
      .replace(/To\: /g, '</u><u>to</u> ')
      .replace(/CC\: /ig, ' <u>CC</u> ')
      .replace(/\bfuck/ig, '<u><b>FUCK</b></u>')
      .replace(/bullshit/ig, '<u><b>BULLSHIT</b></u>')
      .replace(/\bshit/ig, '<u><b>SHIT</b></u>')
      .replace(/<img src/g, '<imd src') // <imd> (delay image load)
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


module.exports = fns
