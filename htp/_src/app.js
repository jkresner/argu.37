import './css/app.less'
import './js/moment-tz-2020'
import './js/marked'
import './js/ag'

var blach = "heel"

if (module.hot) {
  module.hot.accept('./js/ag', function() {
    console.log('HOT ./js/ag');
  })
  // module.hot.dispose(function() {
    // clearInterval(timer);
  // });
}


// import Favicon from './static/favicon.ico';
// function component() {
  // let element = document.createElement('div')
  // let now = moment()
  // element.classList.add(s+now.format('YYYY'))
  // var ico = new Image()
  // ico.src = Favicon
  // element.appendChild(ico)
  // return element
// }


