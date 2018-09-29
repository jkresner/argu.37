const em = {

  md_atchd: function(file) {
    let parts = file.replace(/ /g,'').split('.')
    let ext = parts.pop()
    return `(${parts.join('.')}).${ext}`
  },

  md_law: function(md) { return
    md
      .replace(/\nMaximum penalty/g, `  \n**Maximum penalty**`)
      .replace(/penalty units/g, `**Penalty units**`)
      .replace(/penalty/g, `**penalty**`)
      .replace(/is liable to/g, `  **is liable to**`)
      .replace(/\n\n/g, `\n`)
      // .replace(/\n/g, `  \n`)
      .replace(/\((i|ii|iii|iv|v|vi)\)/g, '>>> 1.')
      .replace(/\([a-z]\)/g, '>> 1.')
      .replace(/\([1-9]\)/g, '> 1.')
  },

  md_mail: function(md) { return
    md
      .replace(/Subject: /g, '<br />')
      .replace(/From: /g, '')
      .replace(/(Sent|Date): /g, ' <u>on ')
      .replace(/To\: /g, '</u><u>to</u> ')
      .replace(/CC\: /ig, ' <u>CC</u> ')
      .replace(/\bfuck/ig, '<u><b>FUCK</b></u>')
      .replace(/bullshit/ig, '<u><b>BULLSHIT</b></u>')
      .replace(/\bshit/ig, '<u><b>SHIT</b></u>')
      .replace(/<img src/g, '<imd src')
  },

}


module.exports = em
