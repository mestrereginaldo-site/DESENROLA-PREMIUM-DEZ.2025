import { BookOpen, Calculator, Search, Users, FileText, MessageSquare } from 'lucide-react'

const features = [
  {
    icon: <BookOpen className="h-10 w-10" />,
    title: "Para Você, Cidadão",
    description: "Guias passo a passo, modelos de documentos prontos, glossário interativo e linguagem simples.",
    color: "bg-blue-100 text-primary-navy"
  },
  {
    icon: <Calculator className="h-10 w-10" />,
    title: "Ferramentas Práticas",
    description: "Calculadoras jurídicas, simuladores, check-lists e ferramentas que resolvem problemas reais.",
    color: "bg-yellow-100 text-yellow-800"
  },
  {
    icon: <Search className="h-10 w-10" />,
    title: "Para o Profissional",
    description: "Banco de jurisprudência, súmulas, consulta processual e biblioteca de petições.",
    color: "bg-purple-100 text-purple-800"
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Comunidade Ativa",
    description: "Fórum de discussões, troca de experiências e networking com profissionais do direito.",
    color: "bg-green-100 text-green-800"
  },
  {
    icon: <FileText className="h-10 w-10" />,
    title: "Conteúdo Atualizado",
    description: "Artigos revisados por especialistas, sempre atualizados conforme mudanças na legislação.",
    color: "bg-red-100 text-red-800"
  },
  {
    icon: <MessageSquare className="h-10 w-10" />,
    title: "Assistente Virtual",
    description: "Tire dúvidas jurídicas básicas com nosso assistente baseado em legislação brasileira.",
    color: "bg-indigo-100 text-indigo-800"
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary-navy mb-4">
            Como a Plataforma Funciona
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Uma experiência completa em direito, desde o cidadão leigo até o advogado experiente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card-hover bg-gray-50 p-6 rounded-2xl border border-gray-200"
            >
              <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-serif text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
