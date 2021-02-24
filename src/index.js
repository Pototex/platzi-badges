// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';



//const element = <h1>Hello, Platzi Badges!</h1>;
//const element = React.createElement('a', {href: 'https://platzi.com'}, 'Ir a Platzi');

const name = 'Richard'
//const element = React.createElement('h1', {}, `Hola, soy ${name}`)
const sum = () => 3 + 3
const jsx = <h1>Hola, soy {sum()}</h1>
const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(jsx, container);

