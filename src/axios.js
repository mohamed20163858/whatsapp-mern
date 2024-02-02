// Import Axios library
import axios from 'axios';

// Create an instance of Axios with default configurations
const axiosInstance = axios.create({
  baseURL: 'http://localhost:9000',
 
});

export default axiosInstance;