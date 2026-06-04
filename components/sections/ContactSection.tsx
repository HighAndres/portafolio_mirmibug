const contacts = [
  {
    icon: '🌐',
    title: 'Sitio web',
    desc: 'mirmibug.com',
    href: 'https://mirmibug.com',
    label: 'Visitar →',
  },
  {
    icon: '💬',
    title: 'WhatsApp',
    desc: 'Respuesta rápida',
    href: 'https://wa.me/525549644749',
    label: 'Chatear →',
  },
  {
    icon: '💼',
    title: 'LinkedIn',
    desc: 'Mirmibug IT Solutions',
    href: 'https://www.linkedin.com/company/mirmibug',
    label: 'Conectar →',
  },
  {
    icon: '📧',
    title: 'Email',
    desc: 'contacto@mirmibug.com',
    href: 'mailto:contacto@mirmibug.com',
    label: 'Escribir →',
  },
]

export default function ContactSection() {
  return (
    <section id="contacto" className="max-w-6xl mx-auto px-6 py-20">
      <p className="font-mono text-xs text-green/60 mb-2 uppercase tracking-widest">
        // contacto
      </p>
      <h2 className="font-mono text-3xl font-bold text-white mb-3">
        ¿Tienes un proyecto?
      </h2>
      <p className="text-zinc-400 text-sm mb-10 max-w-md">
        Cuéntanos qué necesitas. Respondemos en menos de 24 horas.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {contacts.map((c) => (
          <a
            key={c.title}
            href={c.href}
            target={c.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="p-5 rounded-lg border border-green/15 bg-surface hover:border-green/40 hover:bg-green/5 transition-all duration-200 group"
          >
            <span className="text-2xl mb-3 block">{c.icon}</span>
            <p className="font-mono text-sm font-bold text-white mb-1">{c.title}</p>
            <p className="font-mono text-xs text-zinc-500 mb-3">{c.desc}</p>
            <p className="font-mono text-xs text-green/70 group-hover:text-green transition-colors">
              {c.label}
            </p>
          </a>
        ))}
      </div>
    </section>
  )
}
