import axios from 'axios';

export const hyperForm = axios.create({
  baseURL: `https://hyperform.jp/api/`,
  headers: { 'Content-Type': 'application/json' },
})
