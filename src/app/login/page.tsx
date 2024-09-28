import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const Login = () => {
  return (
    <Card className="flex min-h-screen flex-col items-center justify-items-center  p-4">
      <div className="flex flex-col items-center gap-8">
        <h1 className="place-items-center text-5xl">Home</h1>
        <Tabs
          defaultValue="login"
          className="pb m-auto w-[400px] rounded-md pb-4"
        >
          <Card>
            <TabsList className="w-full">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="create_acount">Criar Conta</TabsTrigger>
            </TabsList>
          </Card>
          <TabsContent
            value="login"
            className="flex flex-col items-center gap-4"
          >
            <form className="flex flex-col items-center gap-3 bg-transparent">
              <label htmlFor="email">
                Email
                <Input id="email" className="h-8 w-full" />
              </label>

              <label htmlFor="email">
                Senha
                <Input id="email" className="h-8 w-full" />
              </label>

              <Button className="w-full" type="submit">
                Login
              </Button>
            </form>
          </TabsContent>
          <TabsContent
            value="create_acount"
            className="flex flex-col items-center gap-4"
          >
            <form className="flex flex-col items-center gap-3 bg-transparent">
              <label htmlFor="email">
                Nome
                <Input id="email" className="h-8 w-full" />
              </label>
              <label htmlFor="email">
                Email
                <Input id="email" className="h-8 w-full" type="email" />
              </label>
              <label htmlFor="email">
                Senha
                <Input id="email" className="h-8 w-full" type="password" />
              </label>
              <Button className="w-full" type="submit">
                Cadastrar
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  )
}
