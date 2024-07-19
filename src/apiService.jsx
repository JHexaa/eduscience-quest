import axios from 'axios';
import { API_BASE_URL } from './config';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiService = {
  login: (email, password) => {
    return axiosInstance.post('/login', { email, password });
  },
  /*logout: () => {
    return axiosInstance.get('/logout');
  },*/
  register: (userData) => {
    return axiosInstance.post('/register', userData);
  },
  fetchUsers: () => {
    return axiosInstance.get('/usuarios');
  },
};

export default apiService;