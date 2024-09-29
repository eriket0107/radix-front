import { User } from '@/@types'
import { api } from '@/lib/axios'
import cookies from 'nookies'

export const resfreshToken = async () => {
  try {
    const { data } = await api.patch<{ token: string }>('/token/refresh', {})

    api.defaults.headers.common.Authorization = `Bearer ${data.token}`
    cookies.set(null, 'token', data.token, { path: '/' })
    return data
  } catch (error) {
    console.log(error)
  }
}

export const fetchUser = async () => {
  try {
    const response = await api.get<User>('/get-user', {})
    return response.data
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if ((error as Error)?.status === 401) {
      resfreshToken()
    }
  }
}
