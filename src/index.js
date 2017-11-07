import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import store from './store';
import {Provider} from 'react-redux';

const main = (
    <Provider store={store}>
        <App />
    </Provider>
);
ReactDOM.render(main, document.getElementById('root'));

