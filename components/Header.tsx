'use client'

import { Menu, Search, User, Scale } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-primary-navy text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-primary-gold" />
            <div>
              <h1 className="text-2xl font-bold font-serif">Desenrola Direito</h1>
              <p className="text-sm text-gray-300">Simplificando o Direito para todos</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-primary-gold transition-colors">Home</Link>
            <Link href="/biblioteca" className="hover:text-primary-gold transition-colors">Biblioteca Jurídica</Link>
            <Link href="/calculadoras" className="hover:text-primary-gold transition-colors">Calculadoras</Link>
            <Link href="/jurisprudencia" className="hover:text-primary-gold transition-colors">Jurisprudência</Link>
            <Link href="/sobre" className="hover:text-primary-gold transition-colors">Sobre</Link>
            <Link href="/contato" className="hover:text-primary-gold transition-colors">Contato</Link>
          </nav>

          {/* Search and User */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:bg-white/10 rounded-full">
              <Search className="h-5 w-5" />
            </button>
            <button className="btn-primary text-sm py-2 px-4">
              Acesso Profissional
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="hover:text-primary-gold transition-colors py-2">Home</Link>
              <Link href="/biblioteca" className="hover:text-primary-gold transition-colors py-2">Biblioteca Jurídica</Link>
              <Link href="/calculadoras" className="hover:text-primary-gold transition-colors py-2">Calculadoras</Link>
              <Link href="/jurisprudencia" className="hover:text-primary-gold transition-colors py-2">Jurisprudência</Link>
              <Link href="/sobre" className="hover:text-primary-gold transition-colors py-2">Sobre</Link>
              <Link href="/contato" className="hover:text-primary-gold transition-colors py-2">Contato</Link>
              <div className="pt-4 border-t border-white/20">
                <button className="btn-primary w-full py-3">
                  Acesso Profissional
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
