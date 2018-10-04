const minilr                     = require('mini-lr')
const fs                         = require('fs')
const port                       = 35729
const paths                      = [
 // 'tmpl/md',
 // 'tmpl/fn',
 'tmpl/www/dev/css',
 'tmpl/www/dev/js',
 // 'fs/img',
 // 'fs/md',
 'reload.log'
]


function throttle(delay, fn) {
  let now = Date.now()
  return function() {
    var from = Date.now()
    var interval = from - now
    if (interval < delay) return
    now = from
    fn.apply(this, arguments)
  }
}


fs.writeFileSync(__dirname+'/../../reload.log','',{mode:2})


function watchpath(path, em) {
  fs.watch(path, throttle(2000, (ev, file) => {
    // if (!/reload.log/.test(file))
      console.log(`\n\x1b[34m\x1b[2m%s\x1b[0m  \x1b[34m%s\x1b[0m %s\t\t  %s`,
                                  'dev',         'WWW watch',    ev,     file)
    minilr.changed(file)
    // em.emit(ev, filename)
  }))
}


var watch = (function watch(em) {
  em = em || new (require('events').EventEmitter)()
  // em.on('change', file => {
  //   console.log('fs.changed\t', file)
  //   minilr.changed(file)
  // })
  // em.on('rename', file => {
  //   console.log('fs.rename\t', file)
  //   minilr.changed(file)
  // })

  for (let p of paths) watchpath(p, em)
  return watch
})()


minilr().listen(port, () =>
  console.log('\n\x1b[34m\x1b[2m%s\x1b[0m  \x1b[34m%s\x1b[0m \t\t \x1b[36m\x1b[2m%s\x1b[0m',
              'dev', 'WWW watch  ', `localhost:${port}`)
)
