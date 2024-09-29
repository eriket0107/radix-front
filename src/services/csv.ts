import { CsvFiles } from '@/@types'
import { api } from '@/lib/axios'

export const fetchCsvs = async () => {
  try {
    const { data } = await api.get<CsvFiles>('/list-csv')
    return data
  } catch (error) {
    console.error(error)
    return error
  }
}
