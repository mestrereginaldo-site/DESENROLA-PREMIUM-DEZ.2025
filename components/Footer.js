import Link from 'next/link'
import { Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Desenrola Direito</h3>
          <p className="text-gray-300">Simplificando o Direito para todos. Informação jurídica clara, acessível e prática.</p>
          <div className="flex gap-4 mt-6">
            <a href="#" aria-label="Facebook"><Facebook className="w-6 h-6" /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin className="w-6 h-6" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Categorias</h4>
          <ul className="space-y-2">
            <li><Link href="/categorias/consumidor" className="hover:text-accent">Direito do Consumidor</Link></li>
            <li><Link href="/categorias/trabalhista" className="hover:text-accent">Direito Trabalhista</Link></li>
            <li><Link href="/categorias/civil" className="hover:text-accent">Direito Civil</Link></li>
            <li><Link href="/categorias/constitucional" className="hover:text-accent">Direito Constitucional</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Links Úteis</h4>
          <ul className="space-y-2">
            <li><Link href="/sobre" className="hover:text-accent">Sobre Nós</Link></li>
            <li><Link href="/privacidade" className="hover:text-accent">Política de Privacidade</Link></li>
            <li><Link href="/termos" className="hover:text-accent">Termos de Uso</Link></li>
            <li><Link href="/contato" className="hover:text-accent">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Contato</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2"><MapPin className="w-5 h-5" /> Av. Paulista, 1000, São Paulo - SP</li>
            <li className="flex items-center gap-2"><Phone className="w-5 h-5" /> (11) 4000-0000</li>
            <li className="flex items-center gap-2"><Mail className="w-5 h-5" /> contato@desenroladireito.com.br</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6 text-center text-gray-400">
        <p>© 2025 Desenrola Direito. Todos os direitos reservados.</p>
        <p className="mt-2 text-sm">
          <Link href="/privacidade" className="hover:text-white">Política de Privacidade</Link> → 
          <Link href="/termos" className="ml-2 hover:text-white">Termos de Uso</Link>
        </p>
        <p className="text-xs mt-4">Este site pode incluir anúncios personalizados do Google AdSense. <a href="#" className="underline">Saiba mais</a></p>
      </div>
    </footer>
  )
}
