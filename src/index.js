
/* External */
import React from 'react';
import ReactDOM from 'react-dom';

/* Internal */
import './assets/index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
