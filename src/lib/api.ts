import axios from 'axios'

// Verifica se estamos em um ambiente de desenvolvimento local
const isLocal = process.env.NODE_ENV === 'development'

const baseURL = isLocal
  ? `http://localhost:3000/api`
  : 'https://gabrielfedev.vercel.app/api'

export const api = axios.create({
  baseURL,
})
