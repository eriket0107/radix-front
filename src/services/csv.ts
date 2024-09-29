import { CsvFiles } from '@/@types'
import { api } from '@/lib/axios'

export const fetchCsvs = async () => {
  try {
    const { data } = await api.get<CsvFiles>('/list-csv')
    const { csvFiles } = data
    return csvFiles
  } catch (error) {
    console.log(error)
    return error as Error
  }
}
