import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import GreenDot from '@/components/ui/GreenDot'

export const metadata: Metadata = {
  title: 'Mirmibot — Agente de Ventas IA · Mirmibug',
  description:
    'Habla con Mirmibot, nuestro agente de ventas con inteligencia artificial. Disponible 24/7 para resolver tus dudas y cotizar servicios.',
}

export default function AgentPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-center gap-2 mb-4">
          <GreenDot />
          <span className="font-mono text-xs text-green/80 uppercase tracking-widest">
            en línea
          </span>
        </div>
        <h1 className="font-mono text-4xl font-bold text-white mb-3">Mirmibot</h1>
        <p className="text-zinc-400 text-sm mb-8 max-w-lg">
          Agente conversacional con IA (LLaMA 3.3 70B vía Groq). Puede responder preguntas
          sobre servicios, cotizar y agendar llamadas. Operado por Mirmibug IT Solutions.
        </p>

        <div className="border border-green/20 rounded-lg overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-green/10 bg-surface">
            <GreenDot />
            <span className="font-mono text-xs text-zinc-400">brain.mirmibug.com</span>
            <a
              href="https://brain.mirmibug.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto font-mono text-xs text-green/60 hover:text-green transition-colors"
            >
              abrir en nueva pestaña ↗
            </a>
          </div>
          <iframe
            src="https://brain.mirmibug.com"
            title="Mirmibot"
            className="w-full border-0"
            style={{ height: 'calc(100vh - 280px)', minHeight: '500px' }}
            allow="microphone"
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
