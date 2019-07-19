import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import Assignment2 from './components/Assignment_2/Assignment2'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App customTitlle="Hi Sai" />, document.getElementById('root'));
// ReactDOM.render(<h1>Reac Ap</h1>, document.getElementById('root'));
registerServiceWorker();
