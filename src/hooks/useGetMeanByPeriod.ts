import { fetchMeanbyPeriod } from '@/services/sensor'
import useSWR from 'swr'
export const useGetMeanByPeriod = () => {
  const { data, mutate, isLoading } = useSWR(
    '/mean-by-period',
    fetchMeanbyPeriod,
    {
      shouldRetryOnError: true,
      onError: (error) => {
        console.error(error)
      },
    },
  )

  return { data, mutate, isLoading }
}
