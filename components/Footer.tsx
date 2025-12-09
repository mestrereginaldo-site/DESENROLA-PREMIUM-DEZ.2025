import { Scale, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo and Newsletter */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Scale className="h-6 w-6 text-primary-gold" />
              <h2 className="text-xl font-bold font-serif">Desenrola Direito</h2>
            </div>
            <p className="text-gray-400">Simplificando o Direito para todos</p>
            
            <div className="space-y-2">
              <p className="font-semibold">Receba artigos e novidades</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Seu e-mail"
                  className="flex-grow px-4 py-2 rounded-l-lg text-gray-900"
                />
                <button className="bg-primary-gold text-primary-navy px-4 py-2 rounded-r-lg font-semibold">
                  Inscrever
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-serif">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-primary-gold transition-colors">Home</Link></li>
              <li><Link href="/biblioteca" className="hover:text-primary-gold transition-colors">Biblioteca Jurídica</Link></li>
              <li><Link href="/calculadoras" className="hover:text-primary-gold transition-colors">Calculadoras</Link></li>
              <li><Link href="/jurisprudencia" className="hover:text-primary-gold transition-colors">Jurisprudência</Link></li>
              <li><Link href="/sobre" className="hover:text-primary-gold transition-colors">Sobre Nós</Link></li>
            </ul>
          </div>

          {/* Column 3: Areas do Direito */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-serif">Áreas do Direito</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/direito-consumidor" className="hover:text-primary-gold transition-colors">Direito do Consumidor</Link></li>
              <li><Link href="/direito-trabalhista" className="hover:text-primary-gold transition-colors">Direito Trabalhista</Link></li>
              <li><Link href="/direito-civil" className="hover:text-primary-gold transition-colors">Direito Civil</Link></li>
              <li><Link href="/direito-familia" className="hover:text-primary-gold transition-colors">Direito de Família</Link></li>
              <li><Link href="/direito-penal" className="hover:text-primary-gold transition-colors">Direito Penal</Link></li>
              <li><Link href="/direito-administrativo" className="hover:text-primary-gold transition-colors">Direito Administrativo</Link></li>
            </ul>
          </div>

          {/* Column 4: Legal & Social */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-serif">Jurídico</h3>
            <ul className="space-y-2 text-gray-400 mb-8">
              <li><Link href="/termos" className="hover:text-primary-gold transition-colors">Termos de Uso</Link></li>
              <li><Link href="/privacidade" className="hover:text-primary-gold transition-colors">Política de Privacidade</Link></li>
              <li><Link href="/aviso" className="hover:text-primary-gold transition-colors">Aviso Legal</Link></li>
              <li><Link href="/cookies" className="hover:text-primary-gold transition-colors">Política de Cookies</Link></li>
            </ul>

            <h3 className="text-lg font-bold mb-4 font-serif">Siga-nos</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary-gold transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© 2024 Desenrola Direito. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">CNPJ: XX.XXX.XXX/0001-XX | Este site não oferece consultoria jurídica.</p>
        </div>
      </div>
    </footer>
  )
}
