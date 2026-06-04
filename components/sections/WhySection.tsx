const features = [
  {
    icon: '🔒',
    title: 'Seguridad por defecto',
    userDesc: 'Tu información está protegida con cifrado de extremo a extremo y accesos controlados.',
    techDesc: 'Cifrado en tránsito y reposo, autenticación robusta, rate limiting y validación server-side.',
  },
  {
    icon: '⚡',
    title: 'Rendimiento real',
    userDesc: 'Sistemas que cargan en menos de 1 segundo. Sin pantallas de carga interminables.',
    techDesc: 'Server-side rendering, lazy loading, edge caching y queries optimizadas.',
  },
  {
    icon: '🔄',
    title: 'Automatización inteligente',
    userDesc: 'Eliminamos tareas repetitivas para que tu equipo se enfoque en lo que importa.',
    techDesc: 'Workflows automatizados, webhooks, tareas programadas e integración con servicios externos.',
  },
  {
    icon: '📈',
    title: 'Escala con tu negocio',
    userDesc: 'Empezamos simple y crecemos contigo. Sin pagar por capacidad que no usas.',
    techDesc: 'Contenedores, infraestructura escalable, migraciones controladas y arquitectura modular.',
  },
  {
    icon: '🛡️',
    title: 'Respaldos y recuperación',
    userDesc: 'Backups diarios automáticos. Si algo falla, restauramos en minutos, no en días.',
    techDesc: 'Respaldos cifrados con estrategia 3-2-1, RPO < 24h, RTO < 1h.',
  },
  {
    icon: '👁️',
    title: 'Monitoreo 24/7',
    userDesc: 'Sabemos si algo falla antes que tú. Alertas en tiempo real y respuesta inmediata.',
    techDesc: 'Health checks continuos, uptime monitoring, alertas automáticas y logs centralizados.',
  },
  {
    icon: '🤖',
    title: 'IA aplicada a tu negocio',
    userDesc: 'Agentes inteligentes que atienden clientes, generan reportes y toman decisiones por ti.',
    techDesc: 'Modelos de lenguaje, agentes conversacionales, búsqueda semántica y personalización por dominio.',
  },
  {
    icon: '🚀',
    title: 'Entrega continua',
    userDesc: 'Ves avances cada semana, no cada trimestre. Iteramos rápido con tu feedback.',
    techDesc: 'Control de versiones, integración continua, ambientes de staging y despliegue automatizado.',
  },
]

export default function WhySection() {
  return (
    <section id="por-que" className="max-w-6xl mx-auto px-6 py-20">
      <p className="font-mono text-xs text-green/60 mb-2 uppercase tracking-widest">
        // por qué mirmibug
      </p>
      <h2 className="font-mono text-3xl font-bold text-white mb-3">
        Lo que nos diferencia
      </h2>
      <p className="text-zinc-400 text-sm mb-10 max-w-lg">
        Soluciones que entienden tanto tu negocio como la tecnología detrás.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="group relative p-5 rounded-lg border border-green/10 bg-surface hover:border-green/30 transition-all duration-300 overflow-hidden"
          >
            <span className="text-2xl mb-3 block">{f.icon}</span>
            <h3 className="font-mono text-sm font-bold text-white mb-2">{f.title}</h3>
            <p className="text-zinc-400 text-xs leading-relaxed mb-3">
              {f.userDesc}
            </p>
            <div className="pt-3 border-t border-green/10">
              <p className="font-mono text-xs text-green/50 uppercase tracking-wider mb-1.5">
                detalle técnico
              </p>
              <p className="font-mono text-xs text-zinc-500 leading-relaxed">
                {f.techDesc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
