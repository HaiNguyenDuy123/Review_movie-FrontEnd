import axios from 'axios';

export default axios.create({
    baseURL:'https://moviereviewbackend-production.up.railway.app/',
    headers: {"ngrok-skip-browser-warning": "true"}
});