import axios from 'axios'

// Verifica se estamos em um ambiente de desenvolvimento local
const isLocal = process.env.NODE_ENV === 'development'

// Obtém a porta da variável de ambiente PORT ou define como padrão 3001 para desenvolvimento local
const port = isLocal ? process.env.PORT || 3000 : ''

// Constrói a baseURL com a porta, se estiver disponível
const baseURL = isLocal ? `http://localhost:${port}/api` : '/api'

export const api = axios.create({
  baseURL,
})
