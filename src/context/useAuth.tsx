import { createContext, useContext } from 'react'
import cookies from 'nookies'
import { api } from '@/lib/axios'
import { usePathname, useRouter } from 'next/navigation'
import { LogoutButton } from '@/components/LogoutButton'

type AuthProviderType = {
  children: React.ReactNode
}

type AuthContextType = {
  token: string | null
}

const AuthContext = createContext<AuthContextType>({ token: null })

export const AuthProvider = ({ children }: AuthProviderType) => {
  const pathname = usePathname()
  const router = useRouter()

  const token = cookies.get(null, 'token')?.token || null
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
  } else {
    router.push('/')
  }

  const isLogin = pathname === '/'
  return (
    <AuthContext.Provider value={{ token }}>
      {!isLogin && <LogoutButton />}
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
