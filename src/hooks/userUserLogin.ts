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
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        api.defaults.headers.Authorization = `Bearer ${response.data.token}`
        toast.success('Login com sucesso!')
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        cookies.set(null, 'token', response.data.token, {
          path: '/',
        })
        router.push('/sensor-data')
      },
      onError: (error) => {
        console.error(error)
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
