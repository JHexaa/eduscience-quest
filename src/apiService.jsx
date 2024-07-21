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
  getGame: (id) => {
    return axiosInstance.get(`/games/${id}`);
  },
  updateGame: (usuarioId, temaId, preguntaId, categoriaId) => {
    return axiosInstance.put(`/games/${usuarioId}`, { tema_id: temaId, pregunta_id: preguntaId, categoria_id: categoriaId });
  },
  fetchPreguntas: () => {
    return axiosInstance.get('/preguntas');
  },
  getPregunta: (id) => {
    return axiosInstance.get(`/preguntas/${id}`);
  },
  getRespuestas: (preguntaId) => {
    return axiosInstance.get(`/respuestas/${preguntaId}`);
  }
};

export default apiService;
