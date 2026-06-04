import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import GreenDot from '@/components/ui/GreenDot'

export const metadata: Metadata = {
  title: 'Mirmibot — Agente de Ventas IA · Mirmibug',
  description:
    'Habla con Mirmibot, nuestro agente de ventas con inteligencia artificial. Disponible 24/7 para resolver tus dudas y cotizar servicios.',
}

const features = [
  'Responde preguntas sobre servicios y precios',
  'Califica leads automáticamente',
  'Agenda llamadas y reuniones',
  'Disponible 24/7 en español',
  'Personalizado por negocio',
  'Memoria de contexto por sesión',
]

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
        <p className="text-zinc-400 text-sm mb-10 max-w-lg">
          Agente conversacional con inteligencia artificial. Puede responder preguntas
          sobre servicios, cotizar y agendar llamadas. Operado por Mirmibug IT Solutions.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="border border-green/15 rounded-lg bg-surface p-6">
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-5">
              Capacidades
            </p>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex gap-2.5 text-sm text-zinc-300">
                  <span className="text-green shrink-0 mt-0.5">▸</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <div className="border border-green/15 rounded-lg bg-surface p-6 flex-1">
              <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-3">
                ¿Cómo funciona?
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Mirmibot utiliza inteligencia artificial para entender preguntas en
                lenguaje natural y responder con información precisa sobre los servicios
                de tu empresa. Cada agente se personaliza con el conocimiento específico
                de tu negocio.
              </p>
            </div>

            <a
              href="https://wa.me/525549644749?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20Mirmibot"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center font-mono text-sm px-5 py-4 rounded-lg border border-green bg-green/10 text-green hover:bg-green/20 transition-colors"
            >
              Solicitar demo de Mirmibot →
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
