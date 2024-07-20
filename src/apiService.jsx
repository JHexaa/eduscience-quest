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
  register: (userData) => {
    return axiosInstance.post('/register', userData);
  },
  fetchUsers: () => {
    return axiosInstance.get('/usuarios');
  },
  getUser: (id) => {
    return axiosInstance.get(`/usuarios/${id}`);
  },
  updateUser: (id, userData) => {
    return axiosInstance.put(`/usuarios/${id}`, userData);
  },
  deleteUser: (id) => {
    return axiosInstance.delete(`/usuarios/${id}`);
  },
};

export default apiService;
