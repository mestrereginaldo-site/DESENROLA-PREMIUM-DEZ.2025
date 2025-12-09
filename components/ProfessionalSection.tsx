import { Briefcase, Database, Users, FileCheck } from 'lucide-react'
import Link from 'next/link'

export default function ProfessionalSection() {
  return (
    <section className="py-20 bg-primary-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-6 py-2 rounded-full mb-4">
            <Briefcase className="h-5 w-5 text-primary-gold" />
            <span className="font-semibold">PARA ADVOGADOS E ESTUDANTES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            Ferramentas para Profissionais do Direito
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Recursos avançados para otimizar sua prática jurídica e estudos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <Database className="h-10 w-10 text-primary-gold mb-4" />
            <h3 className="text-xl font-bold font-serif mb-2">Banco de Jurisprudência</h3>
            <p className="text-gray-300">Mais de 10 mil decisões filtradas por tribunal e assunto</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <FileCheck className="h-10 w-10 text-primary-gold mb-4" />
            <h3 className="text-xl font-bold font-serif mb-2">Petições Modelo</h3>
            <p className="text-gray-300">Biblioteca com modelos editáveis em .doc e .pdf</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <Users className="h-10 w-10 text-primary-gold mb-4" />
            <h3 className="text-xl font-bold font-serif mb-2">Fórum Profissional</h3>
            <p className="text-gray-300">Comunidade exclusiva para troca de experiências</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <Briefcase className="h-10 w-10 text-primary-gold mb-4" />
            <h3 className="text-xl font-bold font-serif mb-2">Calculadoras Avançadas</h3>
            <p className="text-gray-300">Ferramentas específicas para cálculos processuais</p>
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            href="/profissional" 
            className="btn-primary bg-white text-primary-navy hover:bg-gray-100 inline-flex items-center px-8 py-4 text-lg"
          >
            Acessar Área Profissional
          </Link>
          <p className="text-gray-400 mt-4">
            Planos a partir de R$ 49,90/mês | <span className="text-primary-gold">7 dias grátis</span>
          </p>
        </div>
      </div>
    </section>
  )
}
