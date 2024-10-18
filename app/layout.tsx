import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/sidebar'
import Navbar from '@/components/Navbar'
import {
  ClerkProvider,
} from "@clerk/nextjs";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Children's Ministry Interactive Learning App",
  description: 'Learn about the Bible through interactive stories, quizzes, and games',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-100">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Navbar />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 pt-16 pl-64">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
    </ClerkProvider>
  )
}