import { createContext, useContext } from 'react'
import cookies from 'nookies'
import { api } from '@/lib/axios'
import { usePathname, useRouter } from 'next/navigation'
import { LogoutButton } from '@/components/LogoutButton'
import useSWR from 'swr'
import { fetchUser } from '@/services/user'
import { User } from '@/@types'
import { toast } from 'sonner'

type AuthProviderType = {
  children: React.ReactNode
}

type AuthContextType = {
  token: string | null
  sessionUser?: User | null
}

const AuthContext = createContext<AuthContextType>({
  token: null,
  sessionUser: null,
})

export const AuthProvider = ({ children }: AuthProviderType) => {
  const { data } = useSWR('/get-user', fetchUser)
  const sessionUser = data
  const pathname = usePathname()
  const router = useRouter()
  const { token } = cookies.get(null, 'token')

  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
  }
  if (!sessionUser && !token) {
    cookies.destroy(null, 'token')
    router.push('/')
    toast.error('Usuário não encontrado')
  }

  const isLogin = pathname === '/'

  return (
    <AuthContext.Provider value={{ token, sessionUser }}>
      {!isLogin && <LogoutButton />}
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
