import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export function Placeholder({ title }: { title: string }) {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-[#FDF9F3]">
      <div className="max-w-2xl mx-auto py-20">

        
        <h1 className="section-title mb-6">
          {title}
        </h1>
        
        <p className="text-2xl text-gray-600 leading-relaxed mb-12">
          Estamos preparando este contenido. Mientras tanto, podés escribirnos o agendar una conversación.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link to="/agenda" className="btn-rosa btn-hero">
            Agendar conversación
          </Link>
          <Link to="/" className="text-gray-500 font-bold hover:text-violet-600 flex items-center gap-2">
            <ArrowLeft size={20} />
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  )
}
