import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import counterReducer from './store/reducers/counter';
import resultsReducer from './store/reducers/results';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultsReducer
})

/**
 * This is a custom middleware
 * This can be overridden
 */
const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware Dispatching', action)
            const result = next(action)
            console.log('[Middleware State', store.getState())
            console.log(result)
            return result;
        }
    }
}
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();