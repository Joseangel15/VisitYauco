import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from './Ducks/store';
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(

    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>


    , document.getElementById('root'));
// registerServiceWorker();
