import axios from 'axios';

// Replace with your actual API base URL
const API_BASE_URL = process.env.VITE_API_BASE_URL || 'https://api.example.com/v1';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  // You can add other default configurations here, like headers
});

export default axiosInstance;