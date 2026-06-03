import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Tag from '@/components/ui/Tag'
import { projects } from '@/data/projects'
import { statusColor, statusLabel } from '@/lib/utils'

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto px-6 py-20">
        <p className="font-mono text-xs text-green/60 mb-2 uppercase tracking-widest">
          // proyectos
        </p>
        <h1 className="font-mono text-4xl font-bold text-white mb-10">
          Todos los proyectos
        </h1>

        <div className="space-y-4">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="block p-6 rounded-lg border border-green/15 bg-surface hover:border-green/40 hover:bg-green/5 transition-all duration-200 group"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <h2 className="font-mono text-lg font-bold text-white group-hover:text-green transition-colors">
                  {p.title}
                </h2>
                <span className={`shrink-0 text-xs font-mono border rounded px-2 py-0.5 ${statusColor(p.status)}`}>
                  {statusLabel(p.status)}
                </span>
              </div>
              <p className="text-zinc-400 text-sm mb-3">{p.shortDesc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => <Tag key={s} label={s} />)}
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
