import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import counterReducer from './store/reducers/counter';
import saveCounterReducer from './store/reducers/saveCounter';

const rootReducer = combineReducers({
    counterStore: counterReducer,
    saveCounterReducer: saveCounterReducer
});

const store = createStore(rootReducer);

store.subscribe(() => {
    console.log('[Subscription]: ', store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
