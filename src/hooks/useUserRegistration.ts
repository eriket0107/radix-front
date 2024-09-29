import { useForm } from 'react-hook-form'
import { useFetch } from './useFech'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'

const RegistrationSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
})

type RegistrationType = z.infer<typeof RegistrationSchema>

export const useUserRegistration = () => {
  const [register, { loading, error }] = useFetch()
  const methods = useForm<RegistrationType>({
    resolver: zodResolver(RegistrationSchema),
  })
  console.log(error)
  const handleSubmit = async ({ email, name, password }: RegistrationType) => {
    const body = { email, name, password }
    return await register('/user-register', body, {
      method: 'post',
      onSuccess: () => {
        toast.success('Usuário criado com sucesso!')
      },
      onError: () => {
        toast.error('Falha ao criar usuário')
      },
    })
  }

  return {
    handleSubmit,
    methods,
    loading,
  }
}
