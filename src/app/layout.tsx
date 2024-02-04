import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'
import MessageCard from './components/message/MessageCard'
import { EdgeStoreProvider } from '../lib/edgestore'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GF Portfolio',
  description: 'Portfolio de Gabriel Fernandes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <NavBar /> */}
        <NavBar />
        <EdgeStoreProvider>{children}</EdgeStoreProvider>
        <footer className="min-h-4/6-screen bg-customGray">
          <MessageCard />
        </footer>
      </body>
    </html>
  )
}
