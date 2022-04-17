import axios from 'axios';
import { BASE_URL } from '../common/constants';

const axiosInstancePerritos = axios.create({
  baseURL: BASE_URL || 'http://localhost:8000/',
});

export default axiosInstancePerritos;
