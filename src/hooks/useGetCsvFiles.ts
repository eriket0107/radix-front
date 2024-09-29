import { CsvFile } from '@/@types'
import { fetchCsvs } from '@/services/csv'
import useSWR from 'swr'

export const useGetCSVFiles = () => {
  const { data, mutate, isLoading } = useSWR('/list-csv', fetchCsvs, {
    shouldRetryOnError: false,
  })
  const csvFiles = data as CsvFile[]
  const hasData = !!csvFiles && !!Object.values(csvFiles).length

  return { data: csvFiles, mutate, isLoading, hasData }
}
