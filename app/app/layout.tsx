import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Desenrola Direito',
  description: 'Simplificando o Direito para todos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <header className="bg-primary-navy text-white p-4">
          <h1 className="text-2xl font-bold">Desenrola Direito</h1>
        </header>
        {children}
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <p>© 2024 Desenrola Direito - Todos os direitos reservados</p>
        </footer>
      </body>
    </html>
  )
}
