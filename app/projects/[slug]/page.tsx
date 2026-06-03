import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Tag from '@/components/ui/Tag'
import TerminalWindow from '@/components/ui/TerminalWindow'
import { projects, getProjectBySlug } from '@/data/projects'
import { statusColor, statusLabel } from '@/lib/utils'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return {
    title: `${project.title} — Mirmibug`,
    description: project.shortDesc,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  return (
    <>
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto px-6 py-20">
        <Link
          href="/projects"
          className="font-mono text-xs text-zinc-500 hover:text-green transition-colors mb-8 inline-block"
        >
          ← todos los proyectos
        </Link>

        <div className="flex items-start gap-4 mb-4">
          <h1 className="font-mono text-4xl font-bold text-white">{project.title}</h1>
          <span className={`mt-2 text-xs font-mono border rounded px-2 py-0.5 ${statusColor(project.status)}`}>
            {statusLabel(project.status)}
          </span>
        </div>

        <p className="text-zinc-400 text-lg mb-8 max-w-2xl leading-relaxed">{project.longDesc}</p>

        <div className="flex flex-wrap gap-1.5 mb-10">
          {project.stack.map((s) => <Tag key={s} label={s} />)}
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <div>
            <p className="font-mono text-xs text-zinc-500 mb-4 uppercase tracking-wider">
              features
            </p>
            <ul className="space-y-2">
              {project.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-zinc-300">
                  <span className="text-green shrink-0">›</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <TerminalWindow title={`${project.slug}.sh`} lines={project.terminal} />
        </div>

        <div className="flex gap-4">
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm px-4 py-2 rounded border border-green/30 text-green hover:bg-green/10 transition-colors"
          >
            Ver en GitHub →
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm px-4 py-2 rounded border border-green bg-green/10 text-green hover:bg-green/20 transition-colors"
            >
              Demo en vivo →
            </a>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
