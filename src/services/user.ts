import { User } from '@/@types'
import { api } from '@/lib/axios'
import cookies from 'nookies'

export const fetchUser = async () => {
  const { data } = await api.get<User>('/get-user', {})
  return data
}

export const resfreshToken = async () => {
  const { data } = await api.patch<{ token: string }>('/token/refresh', {})

  api.defaults.headers.common.Authorization = `Bearer ${data.token}`
  cookies.set(null, 'token', data.token, { path: '/' })
  return data
}
