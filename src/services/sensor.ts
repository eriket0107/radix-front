import { MeanByPeriod } from '@/@types'
import { api } from '@/lib/axios'

export const fetchMeanbyPeriod = async () => {
  try {
    const { data: meanByPeriod } =
      await api.get<MeanByPeriod>('/mean-by-period')
    return meanByPeriod
  } catch (error) {
    console.error(error)
    return error
  }
}
