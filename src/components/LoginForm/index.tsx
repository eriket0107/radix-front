'use client'

import { useUserLogin } from '@/hooks/userUserLogin'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

export const LoginForm = () => {
  const { methods, handleSubmit } = useUserLogin()
  return (
    <form
      className="flex w-full flex-col items-center gap-3 bg-transparent"
      onSubmit={methods.handleSubmit(handleSubmit)}
    >
      <label htmlFor="email" className="w-full">
        Email
        <Input id="email" className="w-full" {...methods.register('email')} />
      </label>

      <label htmlFor="email" className="w-full">
        Senha
        <Input
          id="password"
          className="w-full"
          type="password"
          {...methods.register('password')}
        />
      </label>

      <Button className="w-full" type="submit">
        Login
      </Button>
    </form>
  )
}
