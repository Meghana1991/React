import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'

const element = (
    <h1>
        Hello There
    </h1>
)
// ReactDOM.render(element, document.getElementById('root'));
const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();