import GreenDot from '@/components/ui/GreenDot'

const servers = [
  {
    name: 'VPS Principal',
    location: 'CDMX, México',
    role: 'Producción — apps, APIs y bases de datos',
    services: ['4 aplicaciones activas', 'PostgreSQL', 'Reverse proxy', 'SSL/TLS'],
    status: 'online',
  },
  {
    name: 'Agente IA',
    location: 'CDMX, México',
    role: 'Producción — motor de inferencia y chat',
    services: ['LLM inference', 'API gateway', 'Session store', 'Streaming'],
    status: 'online',
  },
]

const devTools = [
  { category: 'Contenedores', items: ['Docker', 'Docker Compose'] },
  { category: 'Proxy & SSL', items: ['Nginx', 'Let\'s Encrypt', 'Certbot'] },
  { category: 'Procesos', items: ['PM2', 'Systemd', 'Health checks'] },
  { category: 'Base de datos', items: ['PostgreSQL', 'Backups cifrados', 'Migraciones'] },
  { category: 'CI/CD', items: ['Git', 'Repositorios privados', 'Build pipelines'] },
  { category: 'Monitoreo', items: ['Uptime checks', 'Alertas', 'Logs centralizados'] },
]

const aiTools = [
  { category: 'Modelos', items: ['LLMs de última generación', 'Embeddings', 'Fine-tuning'] },
  { category: 'Técnicas', items: ['RAG', 'Prompt engineering', 'Búsqueda semántica'] },
  { category: 'Infraestructura IA', items: ['Inferencia acelerada', 'Streaming SSE', 'Context management'] },
  { category: 'Integraciones', items: ['WhatsApp', 'APIs REST', 'Webhooks'] },
]

export default function InfraSection() {
  return (
    <section id="infraestructura" className="max-w-6xl mx-auto px-6 py-20">
      <p className="font-mono text-xs text-green/60 mb-2 uppercase tracking-widest">
        // infraestructura
      </p>
      <h2 className="font-mono text-3xl font-bold text-white mb-3">
        Nuestra infraestructura
      </h2>
      <p className="text-zinc-400 text-sm mb-10 max-w-lg">
        Todo corre en servidores propios. Control total sobre rendimiento,
        seguridad y disponibilidad — sin depender de plataformas de terceros.
      </p>

      {/* Server status panel */}
      <div className="border border-green/15 rounded-lg bg-surface mb-8 overflow-hidden">
        <div className="flex items-center gap-2 px-5 py-3 border-b border-green/10 bg-black/30">
          <GreenDot />
          <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
            Estado de servidores — en vivo
          </span>
          <span className="ml-auto font-mono text-xs text-green/50">
            todos los sistemas operativos
          </span>
        </div>
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-green/10">
          {servers.map((srv) => (
            <div key={srv.name} className="p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green animate-pulse-dot" />
                  <h3 className="font-mono text-sm font-bold text-white">{srv.name}</h3>
                </div>
                <span className="font-mono text-xs text-green/70 px-2 py-0.5 rounded border border-green/20 bg-green/5">
                  {srv.status}
                </span>
              </div>
              <p className="font-mono text-xs text-zinc-500 mb-1">{srv.location}</p>
              <p className="text-zinc-400 text-xs mb-3">{srv.role}</p>
              <div className="flex flex-wrap gap-1.5">
                {srv.services.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-xs px-2 py-0.5 rounded bg-zinc-800/80 border border-zinc-700/50 text-zinc-400"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tools grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Dev tools */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm">🛠️</span>
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
              Desarrollo & operaciones
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {devTools.map((group) => (
              <div
                key={group.category}
                className="p-3.5 rounded-lg border border-green/10 bg-surface"
              >
                <p className="font-mono text-xs font-bold text-white mb-2">{group.category}</p>
                <div className="flex flex-wrap gap-1">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs px-1.5 py-0.5 rounded bg-green/5 border border-green/15 text-green/60"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI tools */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm">🤖</span>
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
              Inteligencia artificial
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {aiTools.map((group) => (
              <div
                key={group.category}
                className="p-3.5 rounded-lg border border-green/10 bg-surface"
              >
                <p className="font-mono text-xs font-bold text-white mb-2">{group.category}</p>
                <div className="flex flex-wrap gap-1">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs px-1.5 py-0.5 rounded bg-green/5 border border-green/15 text-green/60"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
