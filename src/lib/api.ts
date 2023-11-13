import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://portfolio-backend-production-21a1.up.railway.app',
})
