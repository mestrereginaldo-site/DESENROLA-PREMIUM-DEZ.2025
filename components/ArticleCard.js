import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'

export default function ArticleCard({ article }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="bg-blue-100 text-primary text-sm font-semibold px-3 py-1 rounded-full">
            {article.category}
          </span>
          <span className="text-sm text-gray-500">{article.date}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
          <Link href={`/artigos/${article.slug}`}>{article.title}</Link>
        </h3>
        <p className="text-gray-600 mb-4">{article.excerpt}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {article.readTime}</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {article.date}</span>
          </div>
          <Link href={`/artigos/${article.slug}`} className="text-primary font-semibold hover:underline">
            Ler mais →
          </Link>
        </div>
      </div>
    </div>
  )
}
