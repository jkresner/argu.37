import './css/web.less'


// function component() {
  // let element = document.createElement('div')
  // let now = moment()
  // element.classList.add(s+now.format('YYYY'))
  // var ico = new Image()
  // ico.src = Favicon
  // element.appendChild(ico)
  // return element
// }


// document.body.appendChild(component())
// let element = component(); // Store the element to re-render on print.js changes
// document.body.appendChild(element);
// if (module.hot) {
//   module.hot.accept('./print.js', function() {
//     console.log('Accepting the updated printMe module!');
//     document.body.removeChild(element);
//     element = component(); // Re-render the "component" to update the click handler     document.body.appendChild(element);
//   })
// }
// moment from './js/moment-tz-2020.dat'


if (module.hot) {
  module.hot.accept(function() {
    console.log('Accepting the updated module!');
  });
  module.hot.dispose(function() {
    clearInterval(timer);
  });
}
