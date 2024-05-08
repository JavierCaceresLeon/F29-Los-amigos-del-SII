// api.js
import axios from 'axios';

const API_URL = 'http://localhost:8085';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


// Exporta la función post
export const post = async (url, data) => {
  try {
    const response = await api.post(url, data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const get = async (url) => {
  try {
    const response = await api.get(url);
    return response;
  } catch (error) {
    throw error;
  }
};

export const put = async (url, data) => {
  try {
    const response = await api.put(url, data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const del = async (url) => {
  try {
    const response = await api.delete(url);
    return response;
  } catch (error) {
    throw error;
  }
};

export const patch = async (url, data) => {
  try {
    const response = await api.patch(url, data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getUsers = () => api.get('/users');

// Interceptar y manejar los errores de todas las solicitudes
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Mostrar mensaje de error genérico
    console.error('Error en la solicitud:', error);
    // Puedes mostrar un mensaje de error genérico o redirigir a una página de error
    return Promise.reject(error);
  }
);

export default api;
