import axios from "axios";
const instance = axios.create({
    baseURL: "http://my-json-server.typicode.com/DanielNempeque/jsonServer/"
});
export default instance;