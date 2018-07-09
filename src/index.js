
/* External */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import { composeWithDevTools } from 'redux-devtools-extension';

/* Internal */
import './assets/index.scss';
import App from './App';
import reducers from './store/reducers';


const store = createStore( 
    reducers,
    composeWithDevTools( applyMiddleware( reduxPackMiddleware ) ),
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
);
