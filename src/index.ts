import _ from 'lodash';
import './style.css';
import Logo from './logo.png';
import printMe from './print';
function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

// Add the image to our existing div.
   const myIcon = new Image();
   myIcon.src = Logo;

   //element.appendChild(myIcon);

    return element;
  }

  document.body.appendChild(component());

  if (module.hot) {
    module.hot.accept('./print.ts', function() {
             console.log('Accepting the updated printMe module!');
             printMe();
           })
  }