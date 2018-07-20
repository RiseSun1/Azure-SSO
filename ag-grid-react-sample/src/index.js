import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// var Adal = require('./adal/adal-request');
// Adal.processAdalCallback();

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import { runWithAdal } from 'react-adal';
import { authContext } from './adal/adal-config';

const DO_NOT_LOGIN = false;

runWithAdal(authContext, () => {

  // eslint-disable-next-line
   require('./indexApp.js');
//ReactDOM.render(<App />, document.getElementById('root'));

},DO_NOT_LOGIN);
