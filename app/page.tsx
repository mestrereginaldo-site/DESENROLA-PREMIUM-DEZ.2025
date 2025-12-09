export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-primary-navy mb-4">
        Entenda Seus Direitos de Forma Clara e Descomplicada
      </h1>
      <p className="text-lg mb-8">
        Aprenda a defender seus direitos e solucionar problemas do dia a dia sem precisar de advogado.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-2xl font-bold text-primary-navy mb-2">Direito do Consumidor</h2>
          <p>Proteção nas relações de consumo</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-2xl font-bold text-primary-navy mb-2">Direito Trabalhista</h2>
          <p>Direitos nas relações de trabalho</p>
        </div>
      </div>
    </main>
  )
}
