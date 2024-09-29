import { LoginForm } from '@/components/LoginForm'
import { RegisterForm } from '@/components/RegisterForm'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default async function Home() {
  return (
    <Card className="pb-\ flex min-h-screen flex-col items-center  justify-items-center p-4 pb-0">
      <div className="flex flex-col items-center gap-8">
        <h1 className="place-items-center text-5xl">Home</h1>
        <Tabs defaultValue="login" className="pb m-auto w-[400px] rounded-md ">
          <Card>
            <TabsList className="w-full">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="create_acount">Criar Conta</TabsTrigger>
            </TabsList>
          </Card>
          <TabsContent value="login" className="flex flex-col items-center ">
            <LoginForm />
          </TabsContent>
          <TabsContent
            value="create_acount"
            className="flex flex-col items-center "
          >
            <RegisterForm />
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  )
}
