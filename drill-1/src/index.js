import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';
//import Provider (from react-redux) and the store.
import {Provider} from 'react-redux'
//import store
import store from './store'




//In the render method, wrap <App /> with Provider
ReactDOM.render(
//Pass the store, as a prop, to Provider
    <Provider store={store} >
        <App />
    </Provider>
    , document.getElementById('root'));
// registerServiceWorker();
