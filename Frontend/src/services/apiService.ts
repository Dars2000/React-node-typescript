import axios from 'axios';

// Configura la base URL de acuerdo a tu entorno
const api = axios.create({
  baseURL: 'http://localhost:5001/api', // Verifica que esta URL sea correcta
});

export default api;
