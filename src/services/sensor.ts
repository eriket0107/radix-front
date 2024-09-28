import { MeanByPeriod } from '@/@types'
import { api } from '@/lib/axios'

export const fetchMeanbyPeriod = async () => {
  const { data: meanByPeriod } = await api.get<MeanByPeriod>('/mean-by-period')

  return meanByPeriod
}
