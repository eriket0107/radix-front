import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import { Providers } from '@/context/Provider'

const roboto = Roboto({
  weight: ['400', '700', '500'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Radix Front Challange',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.className}  overflow-hidden antialiased`}>
        <Providers>{children}</Providers>
        <Toaster richColors />
      </body>
    </html>
  )
}
