import GreenDot from '@/components/ui/GreenDot'

const chatMessages = [
  { role: 'bot' as const, text: 'Hola 👋 Soy Mirmibot, el asistente virtual de Mirmibug. ¿En qué puedo ayudarte?' },
  { role: 'user' as const, text: '¿Qué servicios ofrecen?' },
  { role: 'bot' as const, text: 'Ofrecemos desarrollo de software a medida, automatización de procesos con n8n, soporte técnico MSP y soluciones con inteligencia artificial. ¿Te interesa alguno en particular?' },
  { role: 'user' as const, text: '¿Pueden automatizar mi proceso de facturación?' },
  { role: 'bot' as const, text: 'Por supuesto. Hemos implementado automatizaciones de facturación con n8n + APIs de SAT. Puedo agendar una llamada para evaluar tu caso. ¿Te parece?' },
]

const capabilities = [
  'Responde dudas sobre servicios',
  'Cotiza proyectos en tiempo real',
  'Agenda llamadas automáticamente',
  'Disponible 24/7 en español',
]

export default function AgentSection() {
  return (
    <section id="agente" className="max-w-6xl mx-auto px-6 py-20">
      <p className="font-mono text-xs text-green/60 mb-2 uppercase tracking-widest">
        // agente ia
      </p>
      <h2 className="font-mono text-3xl font-bold text-white mb-3">
        Habla con Mirmibot
      </h2>
      <p className="text-zinc-400 text-sm mb-8 max-w-lg">
        Nuestro agente de ventas con IA puede responder tus dudas, cotizar
        servicios y agendar una llamada. Disponible 24/7.
      </p>

      <div className="grid md:grid-cols-5 gap-6">
        {/* Chat preview */}
        <div className="md:col-span-3 border border-green/20 rounded-lg overflow-hidden bg-surface flex flex-col">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-green/10 bg-black/30">
            <GreenDot />
            <span className="font-mono text-xs text-zinc-400">Mirmibot</span>
            <span className="font-mono text-xs text-zinc-600 ml-1">— en línea</span>
          </div>

          <div className="flex-1 p-4 space-y-3 overflow-hidden">
            {chatMessages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-3.5 py-2.5 rounded-lg text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-green/15 text-green border border-green/20'
                      : 'bg-zinc-800/80 text-zinc-300 border border-zinc-700/50'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="px-4 py-3 border-t border-green/10 bg-black/20">
            <div className="flex items-center gap-3">
              <div className="flex-1 h-9 rounded-md border border-zinc-700/50 bg-zinc-900/50 flex items-center px-3">
                <span className="font-mono text-xs text-zinc-600">Escribe tu mensaje...</span>
              </div>
              <a
                href="https://brain.mirmibug.com"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 h-9 px-4 rounded-md bg-green text-black font-mono text-xs font-bold flex items-center gap-1.5 hover:bg-green/90 transition-colors"
              >
                Abrir chat ↗
              </a>
            </div>
          </div>
        </div>

        {/* Capabilities sidebar */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="border border-green/15 rounded-lg bg-surface p-5 flex-1">
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-4">
              Capacidades
            </p>
            <ul className="space-y-3">
              {capabilities.map((cap) => (
                <li key={cap} className="flex gap-2.5 text-sm text-zinc-300">
                  <span className="text-green shrink-0 mt-0.5">▸</span>
                  {cap}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-green/15 rounded-lg bg-surface p-5">
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-3">
              Modelo
            </p>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-green animate-pulse-dot" />
              <span className="font-mono text-sm text-white">LLaMA 3.3 70B</span>
            </div>
            <p className="font-mono text-xs text-zinc-600">vía Groq · latencia ~200ms</p>
          </div>

          <a
            href="https://brain.mirmibug.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center font-mono text-sm px-5 py-3 rounded-lg border border-green bg-green/10 text-green hover:bg-green/20 transition-colors"
          >
            Iniciar conversación →
          </a>
        </div>
      </div>
    </section>
  )
}
