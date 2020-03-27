import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://gamerin-d5c3e.firebaseio.com/'
});

export default instance;