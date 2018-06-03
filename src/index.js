
/* External */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

/* Internal */
import './assets/index.scss';
import App from './App';
import reducers from './store/reducers'
import registerServiceWorker from './registerServiceWorker';

const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore( reducers );

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
