import { ArrowRight, Shield, Scale } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary-navy via-blue-900 to-primary-navy text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-2 mb-6">
            <Scale className="h-8 w-8 text-primary-gold" />
            <span className="text-primary-gold font-semibold">PLATAFORMA JURÍDICA PREMIUM</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 leading-tight">
            Domine o Direito que <span className="text-primary-gold">Impacta sua Vida</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl">
            Conteúdo descomplicado para todos e ferramentas avançadas para profissionais. 
            Tudo em uma só plataforma de referência jurídica.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link 
              href="/biblioteca" 
              className="btn-primary inline-flex items-center justify-center text-lg px-8 py-4"
            >
              Explore a Biblioteca
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/calculadoras" 
              className="btn-secondary inline-flex items-center justify-center text-lg px-8 py-4"
            >
              <Shield className="mr-2 h-5 w-5" />
              Ferramentas Práticas
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-3xl font-bold text-primary-gold">500+</div>
              <div className="text-gray-300">Artigos Jurídicos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-3xl font-bold text-primary-gold">50+</div>
              <div className="text-gray-300">Calculadoras</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-3xl font-bold text-primary-gold">10K+</div>
              <div className="text-gray-300">Jurisprudências</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
