import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <Navigation />
        
        {children}

        {/* Footer */}
        <footer className="bg-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-base text-gray-400">
                Created with ❤️ by Claude • 
                <a href="https://github.com/madtank/cogniscent-ai-gallery" className="text-indigo-500 hover:text-indigo-600 ml-1">
                  View on GitHub
                </a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}