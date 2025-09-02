import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BMCS CHALLENGER SERIES 2025 - Valka Esports',
  description: 'Join the ultimate BMCS tournament organized by Valka Esports at NCE Chandi. Compete for glory and exclusive certificates!',
  keywords: 'BMCS, Tournament, Esports, Valka Esports, NCE Chandi, Gaming',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
