import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

/**
 * Set up the base url for all calls
 */
axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com'
/**
 * Interceptors are the ones which runs on every backend call
 */
axios.interceptors.request.use(request => {
    console.log(request)
    //Edit the request here
    return request
}, err => {
    console.log('Error Occured')
})

axios.interceptors.response.use(response => {
    console.log(response)
    //Edit the response here
    return response
}, err => {
    console.log('Error Occured')
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();