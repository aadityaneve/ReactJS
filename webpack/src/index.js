import { add, mul } from './calc';
import('./index.css');

import img from './images/img.gif';

import React from 'react';
import ReactDOM from 'react-dom';

/* console.log('img:', img);

console.log(add(5, 2));
console.log(mul(5, 2));

const h1 = document.createElement('h1');
h1.innerText = 'Hello Webpack';

// adding class name to h1
h1.classList.add('redcolor');

let image = document.createElement('img');
image.src = img;

document.getElementById('root').append(h1, image); */

/* ReactDOM.render(
    what,
    where,

) */

/* ReactDOM.render(
    "Hello World",
    document.getElementById('root')
) */

/* ReactDOM.render(
    React.createElement('h1', { className: 'redcolor' }, 'Hello Webpack'),
    React.createElement(
        'h1',
        { className: 'redcolor' },
        React.createElement('i', null, 'React')
    ),
    document.getElementById('root')
); */

/* ReactDOM.render(
    // React.createElement('h1', { className: 'redcolor' }, 'Hello Webpack'),
    React.createElement('h1', { className: 'redcolor' }, [
        'Hello Webpack and ',
        React.createElement('i', null, 'React'),
    ]),
    document.getElementById('root')
); */

ReactDOM.render(
    <h1 className='redcolor'>
        {' '}Hello Webpack and <i>React</i>{' '}
    </h1>,
    document.getElementById('root')
);
