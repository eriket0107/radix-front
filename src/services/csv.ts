import { CsvFiles } from '@/@types'
import { api } from '@/lib/axios'

export const fetchCsvs = async () => {
  const { data } = await api.get<CsvFiles>('/list-csv')
  const { csvFiles } = data

  return csvFiles
}
