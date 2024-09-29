import { api } from '@/lib/axios'

export const fetchUser = async () => {
  const { data } = await api.get('/get-user', {})
  return data
}
