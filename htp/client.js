import './less/app.less'
import focusd from 'focusd'
import moment from 'moment-timezone/node_modules/moment'
import marked from 'marked'
import './script/ag'

window.moment = moment
window.marked = marked
window.focusd = focusd

if (module.hot) {
  module.hot.accept('./script/ag', function() {
    console.log('HOT ag.js')
  })
  // module.hot.dispose(function() {
    // clearInterval(timer);
  // });
}
