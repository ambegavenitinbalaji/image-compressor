import axios from 'axios';

const API_BASE_URL = "https://compressiox.onrender.com/";

const API = axios.create({
    baseURL: API_BASE_URL,
});

export default API;
