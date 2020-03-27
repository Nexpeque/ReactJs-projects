import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './AppWithRouting/App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

axios.interceptors.request.use(requestConfig => {
    console.log(requestConfig);
    requestConfig.data = {
        testValue: 'text'
    }
    return requestConfig;
});
axios.interceptors.response.use(responseConfig => {
    responseConfig = responseConfig.data.map(post => {
        return {
            ...post,
            author: "Daniel"
        }
    });
    return responseConfig;
});

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
