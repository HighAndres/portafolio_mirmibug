import type { Project } from '@/lib/types'
import Tag from './Tag'
import { statusColor, statusLabel } from '@/lib/utils'

interface Props {
  project: Project
  onClick: () => void
  active: boolean
}

export default function ProjectCard({ project, onClick, active }: Props) {
  return (
    <div
      className={`rounded-lg border transition-all duration-200 ${
        active
          ? 'border-green/60 bg-green/5'
          : 'border-green/15 bg-surface hover:border-green/40 hover:bg-green/5'
      }`}
    >
      <button
        onClick={onClick}
        className="w-full text-left p-5 cursor-pointer group"
      >
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-mono text-white text-base leading-tight group-hover:text-green transition-colors">
            {project.title}
          </h3>
          <span className={`shrink-0 text-xs font-mono border rounded px-2 py-0.5 ${statusColor(project.status)}`}>
            {statusLabel(project.status)}
          </span>
        </div>
        <p className="text-sm text-zinc-400 mb-4 leading-relaxed">{project.shortDesc}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <Tag key={s} label={s} />
          ))}
        </div>
      </button>

      {project.demo && (
        <div className="px-5 pb-4 -mt-1">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 font-mono text-xs text-green border border-green/30 rounded px-3 py-1.5 hover:bg-green/10 transition-colors"
          >
            abrir sistema ↗
          </a>
        </div>
      )}
    </div>
  )
}
