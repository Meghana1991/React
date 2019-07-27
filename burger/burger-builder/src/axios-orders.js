import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://my-react-app-7f8be.firebaseio.com/'
});

export default axiosInstance
