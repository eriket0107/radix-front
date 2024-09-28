import { fetchCsvs } from '@/services/csv'
import useSWR from 'swr'

export const useGetCSVFiles = () => {
  const { data, mutate, isLoading } = useSWR('/list-csv', fetchCsvs)
  const hasData = data && data.length > 0

  return { data, mutate, isLoading, hasData }
}
