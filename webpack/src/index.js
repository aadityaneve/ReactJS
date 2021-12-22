import { add, mul } from './calc';
import('./index.css');

import img from './images/img.gif';

console.log('img:', img);

console.log(add(5, 2));
console.log(mul(5, 2));

const h1 = document.createElement('h1');
h1.innerText = 'Hello Webpack';

// adding class name to h1
h1.classList.add('redcolor');

let image = document.createElement('img');
image.src = img;

document.getElementById('root').append(h1, image);
