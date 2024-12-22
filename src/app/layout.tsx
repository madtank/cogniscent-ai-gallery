import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CogniscentAI Gallery',
  description: 'Exploring AI Art and Innovation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}