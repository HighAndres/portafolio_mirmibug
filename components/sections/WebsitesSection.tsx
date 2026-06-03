import { websites } from '@/data/websites'
import GreenDot from '@/components/ui/GreenDot'

export default function WebsitesSection() {
  return (
    <section id="sitios" className="max-w-6xl mx-auto px-6 py-20">
      <p className="font-mono text-xs text-green/60 mb-2 uppercase tracking-widest">
        // sitios web
      </p>
      <h2 className="font-mono text-3xl font-bold text-white mb-3">
        Sitios que construimos y protegemos
      </h2>
      <p className="text-zinc-400 text-sm mb-4 max-w-2xl">
        El diseño lo aporta el cliente o su equipo creativo — nosotros nos
        encargamos de convertirlo en código limpio, desplegarlo en
        infraestructura segura y mantenerlo protegido. Cada sitio sale con
        SSL, headers hardened y monitoreo activo desde el día uno.
      </p>
      <div className="flex items-center gap-2 mb-10 px-3 py-2 rounded border border-green/15 bg-green/5 w-fit">
        <span className="font-mono text-xs text-green/70">↗</span>
        <span className="font-mono text-xs text-zinc-400">
          Diseño externo → Desarrollo & seguridad por Mirmibug
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {websites.map((site) => (
          <div
            key={site.url}
            className="group rounded-lg border border-zinc-800 bg-surface overflow-hidden hover:border-green/25 transition-all duration-300"
          >
            {/* Browser mockup header */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-800 bg-zinc-900/80">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              </div>
              <div className="flex-1 mx-2 px-3 py-1 rounded bg-zinc-800/80 flex items-center gap-2">
                <span className="text-green/50 text-xs">🔒</span>
                <span className="font-mono text-xs text-zinc-500 truncate">
                  {site.url.replace('https://', '')}
                </span>
              </div>
            </div>

            {/* Screenshot */}
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative overflow-hidden"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={site.screenshot}
                alt={`${site.client} — ${site.name}`}
                className="w-full h-48 object-cover object-top opacity-70 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              <span className="absolute bottom-3 right-3 font-mono text-xs text-green/60 opacity-0 group-hover:opacity-100 transition-opacity">
                visitar sitio →
              </span>
            </a>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-mono text-base font-bold text-white mb-0.5">
                    {site.client}
                  </h3>
                  <p className="font-mono text-xs text-zinc-500">
                    {site.name} · {site.year}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-green/10 border border-green/20">
                  <GreenDot />
                  <span className="font-mono text-xs text-green/80">online</span>
                </div>
              </div>

              <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                {site.description}
              </p>

              {/* Role badge */}
              <div className="flex items-center gap-2 mb-4 px-3 py-2 rounded border border-zinc-800 bg-zinc-900/50">
                <span className="text-xs">🛠️</span>
                <span className="font-mono text-xs text-zinc-400">
                  Nuestro rol: <span className="text-white">{site.role}</span>
                </span>
              </div>

              {/* Highlights */}
              <div className="mb-4">
                <p className="font-mono text-xs text-green/50 uppercase tracking-wider mb-2">
                  Lo que hicimos
                </p>
                <ul className="space-y-1.5">
                  {site.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="text-green text-xs mt-0.5">✓</span>
                      <span className="font-mono text-xs text-zinc-400">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Security score bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs text-zinc-500">
                    Security score
                  </span>
                  <span className="font-mono text-xs text-green font-bold">
                    {site.securityScore}/100
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-green/70 animate-bar"
                    style={{ '--bar-level': `${site.securityScore}%` } as React.CSSProperties}
                  />
                </div>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {site.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2 py-0.5 rounded border border-zinc-800 text-zinc-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
