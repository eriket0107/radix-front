'use client'

import { useForm } from 'react-hook-form'
import { useFetch } from './useFech'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import cookies from 'nookies'
import { api } from '@/lib/axios'
const LoginSchema = z.object({
  email: z.string(),
  password: z.string(),
})

type LoginSchemaType = z.infer<typeof LoginSchema>

export const useUserLogin = () => {
  const [register, { loading }] = useFetch()
  const methods = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  })
  const router = useRouter()

  const handleSubmit = async (data: LoginSchemaType) => {
    return await register('/sessions', data, {
      method: 'post',

      onSuccess: (response) => {
        api.defaults.headers.common.Authorization = `Bearer ${response.data.token as string}`
        toast.success('Login com sucesso!')
        cookies.set(null, 'token', response.data?.token as unknown as string, {
          path: '/',
        })
        router.push('/sensor-data')
      },
      onError: (error) => {
        console.log(error)
        toast.error('Falha ao Logar.')
      },
    })
  }

  return {
    handleSubmit,
    methods,
    loading,
  }
}
