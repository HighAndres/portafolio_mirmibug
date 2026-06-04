import Link from 'next/link'
import { projects } from '@/data/projects'
import TerminalWindow from '@/components/ui/TerminalWindow'
import Tag from '@/components/ui/Tag'
import { statusColor, statusLabel } from '@/lib/utils'

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="max-w-6xl mx-auto px-6 py-20">
      <p className="font-mono text-xs text-green/60 mb-2 uppercase tracking-widest">
        // proyectos
      </p>
      <h2 className="font-mono text-3xl font-bold text-white mb-10">
        Lo que hemos construido
      </h2>

      <div className="space-y-6">
        {projects.map((p) => (
          <div
            key={p.slug}
            className="rounded-lg border border-green/20 bg-surface p-6"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="font-mono text-lg font-bold text-white">{p.title}</h3>
              <span className={`shrink-0 text-xs font-mono border rounded px-2 py-0.5 ${statusColor(p.status)}`}>
                {statusLabel(p.status)}
              </span>
            </div>
            <p className="text-zinc-400 text-sm mb-5 leading-relaxed max-w-2xl">
              {p.longDesc}
            </p>

            {/* Body: features + terminal */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-mono text-xs text-zinc-500 mb-3 uppercase tracking-wider">
                  features
                </p>
                <ul className="space-y-1.5 mb-4">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-zinc-300">
                      <span className="text-green shrink-0">›</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.stack.map((s) => <Tag key={s} label={s} />)}
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-green border border-green/30 rounded px-3 py-1.5 hover:bg-green/10 transition-colors"
                    >
                      abrir sistema ↗
                    </a>
                  )}
                  <Link
                    href={`/projects/${p.slug}`}
                    className="font-mono text-xs text-zinc-500 hover:text-zinc-200 transition-colors"
                  >
                    Ver detalle →
                  </Link>
                </div>
              </div>

              <TerminalWindow title={`${p.slug}.sh`} lines={p.terminal} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
