import GreenDot from '@/components/ui/GreenDot'

const practices = [
  {
    icon: '🔐',
    title: 'Cifrado en tránsito y reposo',
    desc: 'Toda la comunicación viaja por HTTPS/TLS 1.3. Los datos sensibles se almacenan cifrados con AES-256 en bases de datos protegidas.',
  },
  {
    icon: '🛡️',
    title: 'Autenticación robusta',
    desc: 'JWT con tokens de corta duración + refresh tokens rotados. Contraseñas hasheadas con bcrypt (cost factor 12). Soporte para 2FA.',
  },
  {
    icon: '🔍',
    title: 'Principio de mínimo privilegio',
    desc: 'Cada usuario, servicio y API key tiene solo los permisos estrictamente necesarios. Roles granulares por sistema.',
  },
  {
    icon: '📋',
    title: 'Auditoría y trazabilidad',
    desc: 'Logs inmutables de toda acción crítica: quién, qué, cuándo y desde dónde. Retención configurable por cliente.',
  },
  {
    icon: '🗄️',
    title: 'Respaldos automáticos',
    desc: 'Backups diarios cifrados con estrategia 3-2-1. Pruebas de restauración periódicas. RPO < 24h, RTO < 1h.',
  },
  {
    icon: '🧱',
    title: 'Infraestructura hardened',
    desc: 'Firewall UFW, fail2ban, SSH por llave (sin password), puertos no estándar, actualizaciones automáticas de seguridad.',
  },
]

const certifications = [
  { label: 'HTTPS/TLS 1.3', status: 'active' },
  { label: 'Backups cifrados', status: 'active' },
  { label: 'Firewall activo', status: 'active' },
  { label: 'Logs de auditoría', status: 'active' },
  { label: 'SSH key-only', status: 'active' },
  { label: 'Headers de seguridad', status: 'active' },
]

export default function SecuritySection() {
  return (
    <section id="seguridad" className="max-w-6xl mx-auto px-6 py-20">
      <p className="font-mono text-xs text-green/60 mb-2 uppercase tracking-widest">
        // seguridad
      </p>
      <h2 className="font-mono text-3xl font-bold text-white mb-3">
        Tu información está protegida
      </h2>
      <p className="text-zinc-400 text-sm mb-10 max-w-lg">
        La seguridad no es un extra — es parte de cada línea de código y cada
        decisión de infraestructura que tomamos.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {practices.map((p) => (
          <div
            key={p.title}
            className="p-5 rounded-lg border border-green/10 bg-surface hover:border-green/25 transition-all duration-300"
          >
            <span className="text-xl mb-3 block">{p.icon}</span>
            <h3 className="font-mono text-sm font-bold text-white mb-2">{p.title}</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="border border-green/15 rounded-lg bg-surface p-6">
        <div className="flex items-center gap-2 mb-4">
          <GreenDot />
          <p className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
            Estado de seguridad — todos los sistemas
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {certifications.map((c) => (
            <div
              key={c.label}
              className="flex items-center gap-2 px-3 py-2 rounded border border-green/20 bg-green/5"
            >
              <span className="text-green text-xs">✓</span>
              <span className="font-mono text-xs text-zinc-300">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
