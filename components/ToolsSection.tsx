import { Calculator, Brain, Download } from 'lucide-react'
import Link from 'next/link'

export default function ToolsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary-navy mb-4">
            Ferramentas Premium
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Recursos interativos que transformam conhecimento jurídico em ação prática.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Calculadora Destaque */}
          <div className="bg-gradient-to-br from-primary-navy to-blue-900 text-white rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Calculator className="h-8 w-8 text-primary-gold mr-3" />
              <h3 className="text-2xl font-bold font-serif">Calculadora Jurídica Inteligente</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Calcule direitos trabalhistas, multas consumeristas e danos morais com precisão.
              Base legal citada em cada resultado.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-white/10 p-4 rounded-lg">
                <span>Rescisão Trabalhista</span>
                <Link href="#" className="text-primary-gold font-semibold hover:text-white">
                  Calcular →
                </Link>
              </div>
              <div className="flex items-center justify-between bg-white/10 p-4 rounded-lg">
                <span>Multa por Atraso de Entrega</span>
                <Link href="#" className="text-primary-gold font-semibold hover:text-white">
                  Calcular →
                </Link>
              </div>
              <div className="flex items-center justify-between bg-white/10 p-4 rounded-lg">
                <span>Valor de Danos Morais</span>
                <Link href="#" className="text-primary-gold font-semibold hover:text-white">
                  Calcular →
                </Link>
              </div>
            </div>
          </div>
          
          {/* Assistente IA */}
          <div className="border-2 border-primary-gold/30 rounded-2xl p-8 bg-gradient-to-br from-gray-50 to-white">
            <div className="flex items-center mb-6">
              <Brain className="h-8 w-8 text-primary-navy mr-3" />
              <h3 className="text-2xl font-bold font-serif text-primary-navy">Assistente Jurídico por IA</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Tire dúvidas jurídicas básicas com nosso assistente especializado. 
              <span className="block text-sm text-gray-500 mt-2">
                *Baseado na legislação brasileira. Não substitui consulta com advogado.
              </span>
            </p>
            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-primary-gold flex items-center justify-center text-white font-bold">
                  DD
                </div>
                <div>
                  <div className="font-semibold text-primary-navy">Desenrola Assistente</div>
                  <p className="text-gray-700">Olá! Sou seu assistente jurídico. Posso ajudar com dúvidas sobre direito do consumidor, trabalhista, civil e mais. Qual sua dúvida?</p>
                </div>
              </div>
            </div>
            <button className="w-full bg-primary-navy text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors">
              Iniciar Conversa com o Assistente
            </button>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Download className="h-6 w-6 text-primary-navy mr-3" />
              <div>
                <h4 className="font-bold text-lg">Modelos de Documentos Prontos</h4>
                <p className="text-gray-600">Contratos, petições, recursos e mais</p>
              </div>
            </div>
            <Link 
              href="/modelos" 
              className="btn-primary py-2 px-6"
            >
              Baixar Modelos
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
