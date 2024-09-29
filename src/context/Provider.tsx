'use client'

import { AuthProvider } from './useAuth'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>
}
