import GreenDot from '@/components/ui/GreenDot'

const pipeline = [
  {
    number: '01',
    title: 'Ingesta del mensaje',
    desc: 'El usuario envía su consulta desde el widget. La petición viaja cifrada por TLS hasta nuestra API gateway con rate limiting y validación de payload.',
    tags: ['API Gateway', 'TLS 1.3', 'Rate Limiting'],
  },
  {
    number: '02',
    title: 'Enriquecimiento de contexto',
    desc: 'El motor recupera el historial conversacional y lo combina con el knowledge base del cliente usando embeddings vectoriales para máxima relevancia.',
    tags: ['Context Window', 'Embeddings', 'RAG Pipeline'],
  },
  {
    number: '03',
    title: 'Inferencia con LLM',
    desc: 'El prompt optimizado se envía a un modelo de lenguaje de última generación con inferencia acelerada por hardware especializado. Latencia sub-300ms.',
    tags: ['LLM', 'Hardware-Accelerated', 'Low Latency'],
  },
  {
    number: '04',
    title: 'Streaming de respuesta',
    desc: 'La respuesta se transmite token por token al frontend vía Server-Sent Events, permitiendo que el usuario vea la respuesta generarse en tiempo real.',
    tags: ['SSE', 'Streaming', 'Real-time'],
  },
]

const capabilities = [
  {
    title: 'Comprensión de lenguaje natural',
    desc: 'Entiende preguntas complejas en español, interpreta intención y contexto sin comandos rígidos.',
  },
  {
    title: 'Memoria conversacional',
    desc: 'Cada sesión mantiene contexto propio. El agente recuerda lo que se habló para respuestas coherentes.',
  },
  {
    title: 'Personalización por negocio',
    desc: 'Knowledge base específico por cliente: servicios, precios, políticas y tono de comunicación.',
  },
  {
    title: 'Infraestructura propia',
    desc: 'Desplegado en nuestros servidores con SSL, monitoreo continuo y control total sobre los datos.',
  },
]

const metrics = [
  { label: 'Disponibilidad', value: '24/7' },
  { label: 'Latencia p95', value: '< 300ms' },
  { label: 'Infraestructura', value: 'Propia' },
  { label: 'Protocolo', value: 'TLS 1.3' },
]

export default function BotArchitectureSection() {
  return (
    <section id="como-funciona" className="max-w-6xl mx-auto px-6 py-20">
      <p className="font-mono text-xs text-green/60 mb-2 uppercase tracking-widest">
        // arquitectura del agente
      </p>
      <h2 className="font-mono text-3xl font-bold text-white mb-3">
        ¿Cómo funciona Mirmibot?
      </h2>
      <p className="text-zinc-400 text-sm mb-10 max-w-lg">
        Un agente conversacional construido sobre modelos de lenguaje de última
        generación, con inferencia acelerada por hardware y desplegado en
        infraestructura propia.
      </p>

      {/* Pipeline */}
      <div className="grid md:grid-cols-4 gap-4 mb-12">
        {pipeline.map((step, i) => (
          <div key={step.number} className="relative">
            {/* Arrow connector (desktop) */}
            {i < pipeline.length - 1 && (
              <div className="hidden md:block absolute top-8 -right-2.5 text-green/30 text-lg z-10">
                →
              </div>
            )}
            <div className="h-full p-5 rounded-lg border border-green/15 bg-surface hover:border-green/30 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-full border border-green/40 bg-green/10 flex items-center justify-center">
                  <span className="font-mono text-xs text-green font-bold">{step.number}</span>
                </div>
                <h3 className="font-mono text-xs font-bold text-white">{step.title}</h3>
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed mb-3">{step.desc}</p>
              <div className="flex flex-wrap gap-1">
                {step.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-1.5 py-0.5 rounded bg-green/5 border border-green/15 text-green/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-5 gap-6">
        {/* Capabilities */}
        <div className="md:col-span-3 grid sm:grid-cols-2 gap-4">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="p-4 rounded-lg border border-green/10 bg-surface"
            >
              <h3 className="font-mono text-sm font-bold text-white mb-1.5">{cap.title}</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="border border-green/15 rounded-lg bg-surface p-5 flex-1">
            <div className="flex items-center gap-2 mb-4">
              <GreenDot />
              <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
                Métricas de producción
              </p>
            </div>
            <div className="space-y-3">
              {metrics.map((m) => (
                <div key={m.label} className="flex justify-between items-center">
                  <span className="font-mono text-xs text-zinc-500">{m.label}</span>
                  <span className="font-mono text-xs text-white">{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-green/15 rounded-lg bg-surface p-5">
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-3">
              Casos de uso
            </p>
            <ul className="space-y-2">
              {['Atención al cliente 24/7', 'Calificación de leads', 'Cotización automática', 'Agendado de citas'].map((u) => (
                <li key={u} className="flex gap-2 text-xs text-zinc-400">
                  <span className="text-green shrink-0">▸</span>
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
