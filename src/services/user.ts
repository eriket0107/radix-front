import { User } from '@/@types'
import { api } from '@/lib/axios'

export const fetchUser = async () => {
  const { data } = await api.get<User>('/get-user', {})
  return data
}
