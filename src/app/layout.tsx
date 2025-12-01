// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { MainNavbar } from '@/components/layout/main-navbar'
import { MainFooter } from '@/components/layout/main-footer'

// Optionally add a font
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gospel Hospitality - Transformative Spiritual Experiences',
  description: 'Join our community for inspiring teachings, transformative events, and gospel hospitality that changes lives.',
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <MainNavbar />
        <main className="flex-1">
          {children}
        </main>
        <MainFooter />
      </body>
    </html>
  )
}