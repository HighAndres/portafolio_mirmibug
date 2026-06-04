import GreenDot from '@/components/ui/GreenDot'

const chatMessages = [
  { role: 'bot' as const, text: 'Hola 👋 Soy Mirmibot, el asistente virtual de Mirmibug. ¿En qué puedo ayudarte?' },
  { role: 'user' as const, text: '¿Qué servicios ofrecen?' },
  { role: 'bot' as const, text: 'Ofrecemos desarrollo de software a medida, automatización de procesos, soporte técnico MSP y soluciones con inteligencia artificial. ¿Te interesa alguno en particular?' },
  { role: 'user' as const, text: '¿Pueden automatizar mi proceso de facturación?' },
  { role: 'bot' as const, text: 'Por supuesto. Hemos implementado automatizaciones de facturación integradas con el SAT. Puedo agendar una llamada para evaluar tu caso. ¿Te parece?' },
]

const capabilities = [
  'Responde dudas sobre servicios y precios',
  'Califica leads y cotiza en tiempo real',
  'Agenda llamadas automáticamente',
  'Memoria de contexto por sesión',
  'Disponible 24/7 en español',
]

const howItWorks = [
  { step: '01', label: 'Ingesta', desc: 'El mensaje llega cifrado a nuestra API con validación y rate limiting.' },
  { step: '02', label: 'Contexto', desc: 'Se recupera el historial y el knowledge base del negocio con búsqueda semántica.' },
  { step: '03', label: 'Inferencia', desc: 'Un LLM de última generación procesa la consulta con latencia sub-300ms.' },
  { step: '04', label: 'Respuesta', desc: 'Se transmite en tiempo real vía streaming al navegador del usuario.' },
]

const security = [
  'Comunicación cifrada TLS 1.3',
  'Datos en infraestructura propia',
  'Sin acceso a datos de terceros',
  'Logs de auditoría por sesión',
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

      <div className="grid md:grid-cols-5 gap-6 mb-8">
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
              <span className="shrink-0 h-9 px-4 rounded-md bg-zinc-800 text-zinc-500 font-mono text-xs font-bold flex items-center">
                Enviar
              </span>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-2 flex flex-col gap-4">
          {/* Capabilities + specs */}
          <div className="border border-green/15 rounded-lg bg-surface p-5 flex-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-green animate-pulse-dot" />
              <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
                Capacidades
              </p>
            </div>
            <ul className="space-y-2.5 mb-5">
              {capabilities.map((cap) => (
                <li key={cap} className="flex gap-2.5 text-sm text-zinc-300">
                  <span className="text-green shrink-0 mt-0.5">▸</span>
                  {cap}
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-green/10">
              <div className="flex justify-between items-center mb-1.5">
                <span className="font-mono text-xs text-zinc-500">Motor</span>
                <span className="font-mono text-xs text-white">LLM propio</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-mono text-xs text-zinc-500">Latencia p95</span>
                <span className="font-mono text-xs text-white">&lt; 300ms</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://mirmibug.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center font-mono text-sm px-5 py-3.5 rounded-lg border border-green bg-green/10 text-green hover:bg-green/20 transition-colors"
          >
            Probar Mirmibot ↗
          </a>
        </div>
      </div>

      {/* How it works + Security row */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* How it works */}
        <div className="border border-green/15 rounded-lg bg-surface p-5">
          <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-4">
            Cómo funciona por dentro
          </p>
          <div className="grid grid-cols-2 gap-3">
            {howItWorks.map((item) => (
              <div key={item.step} className="flex gap-3">
                <div className="w-6 h-6 rounded-full border border-green/30 bg-green/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="font-mono text-xs text-green font-bold" style={{ fontSize: '10px' }}>{item.step}</span>
                </div>
                <div>
                  <p className="font-mono text-xs text-white font-bold mb-0.5">{item.label}</p>
                  <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security */}
        <div className="border border-green/15 rounded-lg bg-surface p-5">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm">🔒</span>
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
              Seguridad del agente
            </p>
          </div>
          <p className="text-zinc-400 text-xs leading-relaxed mb-4">
            Mirmibot opera en infraestructura propia con controles de seguridad
            de grado empresarial. Los datos de cada conversación están aislados
            y nunca se comparten con terceros.
          </p>
          <div className="grid grid-cols-2 gap-2">
            {security.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 px-2.5 py-1.5 rounded border border-green/15 bg-green/5"
              >
                <span className="text-green text-xs">✓</span>
                <span className="font-mono text-xs text-zinc-400">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
