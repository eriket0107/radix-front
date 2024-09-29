'use client'
import { useUserRegistration } from '@/hooks/useUserRegistration'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

export const RegisterForm = () => {
  const { methods, handleSubmit } = useUserRegistration()
  return (
    <form
      className="flex w-full flex-col items-center gap-3 bg-transparent"
      onSubmit={methods.handleSubmit(handleSubmit)}
    >
      <label htmlFor="name" className="w-full">
        Nome
        <Input id="name" className="w-full" {...methods.register('name')} />
      </label>
      <label htmlFor="email" className="w-full">
        Email
        <Input
          id="email"
          className="w-full"
          type="email"
          {...methods.register('email')}
        />
      </label>
      <label htmlFor="password" className="w-full">
        Senha
        <Input
          id="password"
          className="w-full"
          type="password"
          {...methods.register('password')}
        />
      </label>
      <Button className="w-full" type="submit">
        Cadastrar
      </Button>
    </form>
  )
}
