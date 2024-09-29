import Axios from 'axios'

export const api = Axios.create({
  baseURL: process.env.BASE_API_URL,
  withCredentials: true,
})
