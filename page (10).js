import ArticleCard from '@/components/ArticleCard'
import NewsletterForm from '@/components/NewsletterForm'
import { articles } from '@/data/articles'
import { Calculator, FileText, Shield, Scale } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const recentArticles = articles.slice(0, 3)

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Entenda Seus Direitos de Forma <span className="text-primary">Clara e Descomplicada</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Aprenda a defender seus direitos e solucionar problemas do dia a dia sem precisar de advogado.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/artigos" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary">
            Ver Artigos
          </Link>
          <Link href="/calculadoras" className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
            Calculadoras Jurídicas
          </Link>
        </div>
      </section>

      {/* Acesso Rápido */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Acesso Rápido</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: 'Direito do Consumidor', href: '/categorias/consumidor' },
            { icon: FileText, title: 'Direito Trabalhista', href: '/categorias/trabalhista' },
            { icon: Scale, title: 'Direito Civil', href: '/categorias/civil' },
            { icon: Calculator, title: 'Direito Constitucional', href: '/categorias/constitucional' },
          ].map((cat) => (
            <Link key={cat.title} href={cat.href} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <cat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-bold text-lg">{cat.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Artigos Recentes */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Artigos Recentes</h2>
          <Link href="/artigos" className="text-primary hover:underline">Ver todos →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {recentArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-2xl max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Receba Nossos Artigos</h2>
        <p className="mb-6">Cadastre-se e receba em primeira mão os melhores artigos sobre direito direto no seu email.</p>
        <NewsletterForm />
      </section>
    </div>
  )
}
