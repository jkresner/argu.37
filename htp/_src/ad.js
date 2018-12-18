import './css/adm.less'
import './js/moment-tz-2020.js'
import './js/ag.js'


if (module.hot) {
  module.hot.accept(function() {
    console.log('Accepting the updated module!');
  });
  module.hot.dispose(function() {
    clearInterval(timer);
  });
}
