import { Calendar, Clock, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const articles = [
  {
    category: "Direito do Consumidor",
    title: "Guia Definitivo: Seus Direitos em Compras Online",
    description: "Aprenda como agir em casos de atraso, produto com defeito ou arrependimento de compra na internet.",
    readTime: "8 min",
    date: "15 Dez 2024",
    color: "bg-blue-500"
  },
  {
    category: "Direito Trabalhista",
    title: "Reforma Trabalhista: O Que Mudou para Você?",
    description: "Entenda as principais alterações e como elas afetam seus direitos trabalhistas na prática.",
    readTime: "12 min",
    date: "12 Dez 2024",
    color: "bg-yellow-500"
  },
  {
    category: "Direito Civil",
    title: "Contratos de Locação: Checklist Essencial",
    description: "O que verificar antes de assinar um contrato de aluguel para evitar problemas futuros.",
    readTime: "6 min",
    date: "10 Dez 2024",
    color: "bg-green-500"
  }
]

export default function ContentShowcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary-navy mb-2">
              Conteúdo em Destaque
            </h2>
            <p className="text-gray-600">Artigos mais acessados e atualizações recentes</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button className="px-4 py-2 bg-primary-navy text-white rounded-lg font-semibold">
              Mais Lidos
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg font-semibold hover:bg-gray-100">
              Para Leigos
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg font-semibold hover:bg-gray-100">
              Para Profissionais
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {articles.map((article, index) => (
            <div 
              key={index} 
              className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200"
            >
              <div className={`h-2 ${article.color}`}></div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-semibold text-gray-500">{article.category}</span>
                  <TrendingUp className="h-5 w-5 text-primary-gold" />
                </div>
                <h3 className="text-xl font-bold font-serif text-gray-900 mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {article.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readTime} de leitura
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {article.date}
                  </div>
                </div>
                <Link 
                  href="#" 
                  className="text-primary-gold font-semibold hover:text-primary-navy transition-colors inline-flex items-center"
                >
                  Ler artigo completo →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            href="/biblioteca" 
            className="btn-primary inline-flex items-center px-8 py-3"
          >
            Ver Todos os Artigos
          </Link>
        </div>
      </div>
    </section>
  )
}
