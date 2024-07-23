import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Age Calculator App',
  description: 'A simple age calculator app.',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={
          poppins.className +
          ' flex min-h-screen items-center justify-center bg-off-white p-4 antialiased'
        }
      >
        {children}
      </body>
    </html>
  )
}
