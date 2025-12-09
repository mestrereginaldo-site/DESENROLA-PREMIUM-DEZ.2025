import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Desenrola Direito | Simplificando o Direito para Todos',
  description: 'Informação jurídica clara, acessível e prática. Direito do Consumidor, Trabalhista, Civil, Constitucional e mais.',
  keywords: 'direito, jurídico, advogado, consumidor, trabalhista, civil, constitucional, calculadoras jurídicas',
  authors: [{ name: 'Desenrola Direito' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.desenroladireito.com.br',
    title: 'Desenrola Direito | Simplificando o Direito para Todos',
    description: 'Informação jurídica clara, acessível e prática.',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
