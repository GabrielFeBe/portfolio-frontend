import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://portfolio-backend-production-340a.up.railway.app',
})
