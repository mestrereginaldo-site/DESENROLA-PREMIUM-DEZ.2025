import Link from 'next/link'
import { Scale } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
          <Scale className="w-8 h-8" />
          <span>Desenrola Direito</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="hover:text-accent font-medium">Início</Link>
          <Link href="/artigos" className="hover:text-accent font-medium">Artigos</Link>
          <Link href="/calculadoras" className="hover:text-accent font-medium">Calculadoras</Link>
          <Link href="/categorias" className="hover:text-accent font-medium">Categorias</Link>
          <Link href="/contato" className="hover:text-accent font-medium">Contato</Link>
        </nav>
        <button className="md:hidden">☰</button>
      </div>
    </header>
  )
}
