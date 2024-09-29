import { toast } from 'sonner'
import { useFetch } from './useFech'
import cookies from 'nookies'
import { useRouter } from 'next/navigation'

export const useLogout = () => {
  const [logout, { loading }] = useFetch()
  const router = useRouter()
  const handleLogout = () => {
    return logout(
      '/logout',
      {},
      {
        method: 'delete',
        onSuccess: () => {
          toast.success('Logout com sucesso!')
          cookies.destroy(null, 'token')
          router.push('/')
        },
        onError: (error) => {
          console.log(error)
          toast.error('Falha ao deslogar.')
        },
      },
    )
  }

  return {
    handleLogout,
    loading,
  }
}
