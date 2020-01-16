import axios from 'axios';

const axiosAPI = axios.create({
    baseURL: 'https://products-69.firebaseio.com/products/'
});

export default axiosAPI;