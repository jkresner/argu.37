import _ from 'lodash';
import './dev/css/libs.css';
import './dev/css/web.css';
import './dev/css/ag.css';
import './dev/css/adm.css';
import Favicon from './static/favicon.ico';


function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  // Add the image to our existing div.
  var ico = new Image()
  ico.src = Favicon

  element.appendChild(ico)
  return element;
}

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);


if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler     document.body.appendChild(element);
  })
}
