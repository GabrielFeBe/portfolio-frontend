import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://portfolio-backend-production-bb6c.up.railway.app',
})
