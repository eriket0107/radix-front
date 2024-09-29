'use client'
import { LogOut } from 'lucide-react'
import { Button } from '../ui/button'
import { useLogout } from '@/hooks/useLogout'

export const LogoutButton = () => {
  const { handleLogout } = useLogout()
  return (
    <Button variant={'ghost'} className="flex gap-1" onClick={handleLogout}>
      Sair <LogOut size={14} />
    </Button>
  )
}
