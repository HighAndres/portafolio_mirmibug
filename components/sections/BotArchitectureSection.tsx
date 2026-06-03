const steps = [
  {
    number: '01',
    title: 'El usuario envía un mensaje',
    desc: 'Desde el widget web, el cliente escribe su pregunta en lenguaje natural. La interfaz envía el texto al backend vía API REST segura.',
    tech: 'Frontend → POST /api/chat → Express.js',
  },
  {
    number: '02',
    title: 'Contexto y memoria',
    desc: 'El servidor recupera el historial de la conversación para mantener coherencia. Cada sesión tiene su propio contexto independiente.',
    tech: 'Session store en memoria → historial de mensajes por session ID',
  },
  {
    number: '03',
    title: 'Prompt engineering',
    desc: 'El mensaje se enriquece con el system prompt de Mirmibug: personalidad, servicios, precios, reglas de negocio y formato de respuesta.',
    tech: 'System prompt + contexto de negocio + historial → prompt final',
  },
  {
    number: '04',
    title: 'Inferencia con LLM',
    desc: 'El prompt se envía a LLaMA 3.3 70B a través de Groq, que procesa la solicitud con latencia ultra baja (~200ms) gracias a sus chips LPU.',
    tech: 'Groq SDK → LLaMA 3.3 70B Versatile → streaming response',
  },
  {
    number: '05',
    title: 'Respuesta al cliente',
    desc: 'La respuesta del modelo se transmite en tiempo real al navegador. El bot puede responder preguntas, cotizar servicios o agendar llamadas.',
    tech: 'Server-Sent Events → renderizado progresivo en el frontend',
  },
]

const specs = [
  { label: 'Modelo', value: 'LLaMA 3.3 70B' },
  { label: 'Proveedor', value: 'Groq (LPU)' },
  { label: 'Latencia', value: '~200ms' },
  { label: 'Backend', value: 'Node.js + Express' },
  { label: 'Deploy', value: 'Docker + Nginx' },
  { label: 'Disponibilidad', value: '24/7' },
]

export default function BotArchitectureSection() {
  return (
    <section id="como-funciona" className="max-w-6xl mx-auto px-6 py-20">
      <p className="font-mono text-xs text-green/60 mb-2 uppercase tracking-widest">
        // arquitectura del bot
      </p>
      <h2 className="font-mono text-3xl font-bold text-white mb-3">
        ¿Cómo funciona Mirmibot?
      </h2>
      <p className="text-zinc-400 text-sm mb-10 max-w-lg">
        Un agente conversacional construido con inteligencia artificial de última
        generación, desplegado en nuestra propia infraestructura.
      </p>

      <div className="grid md:grid-cols-5 gap-6 mb-10">
        {/* Pipeline steps */}
        <div className="md:col-span-3 space-y-1">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex gap-4 group">
              {/* Vertical connector line */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full border border-green/40 bg-green/10 flex items-center justify-center shrink-0">
                  <span className="font-mono text-xs text-green font-bold">{step.number}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-green/15 my-1" />
                )}
              </div>

              <div className="pb-6 flex-1">
                <h3 className="font-mono text-sm font-bold text-white mb-1.5">{step.title}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed mb-2">{step.desc}</p>
                <div className="inline-block px-2.5 py-1 rounded bg-black/40 border border-green/10">
                  <code className="font-mono text-xs text-green/60">{step.tech}</code>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Specs sidebar */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="border border-green/15 rounded-lg bg-surface p-5 flex-1">
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-4">
              Especificaciones
            </p>
            <div className="space-y-3">
              {specs.map((s) => (
                <div key={s.label} className="flex justify-between items-center">
                  <span className="font-mono text-xs text-zinc-500">{s.label}</span>
                  <span className="font-mono text-xs text-white">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-green/15 rounded-lg bg-surface p-5">
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-3">
              ¿Por qué Groq?
            </p>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Groq utiliza chips LPU (Language Processing Unit) diseñados
              específicamente para inferencia de LLMs. Esto permite respuestas
              hasta 10x más rápidas que GPUs tradicionales, con costos
              significativamente menores.
            </p>
          </div>

          <div className="border border-green/15 rounded-lg bg-surface p-5">
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-3">
              Personalización
            </p>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Mirmibot está entrenado con el contexto específico de Mirmibug:
              servicios, precios, casos de uso y tono de comunicación. Cada
              cliente puede tener su propio agente personalizado.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
