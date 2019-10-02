import React from 'react';
import ReactDOM from 'react-dom';

// import DisplayElement from './app/components/DisplayElement';
// import './app/styles/styles.css';
import Users from './app/components/Users';

const USERS = ['Andrey', 'Anna', 'Beka', 'Geka', 'Biba'];

ReactDOM.render(<Users items={USERS}/>, document.querySelector('#root'));