import { websites } from '@/data/websites'
import Tag from '@/components/ui/Tag'

export default function WebsitesSection() {
  return (
    <section id="sitios" className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex items-center gap-3 mb-5">
        <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest">
          también hacemos sitios web
        </span>
        <span className="flex-1 h-px bg-zinc-800" />
        <span className="font-mono text-xs text-zinc-700">{websites.length} proyectos</span>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
        {websites.map((site) => (
          <a
            key={site.url}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group shrink-0 w-52 rounded border border-zinc-800 bg-zinc-900/50 overflow-hidden hover:border-zinc-600 transition-all duration-200"
          >
            <div className="aspect-video bg-zinc-900 overflow-hidden">
              {site.screenshot ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={site.screenshot}
                  alt={site.name}
                  className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-90 transition-opacity"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-mono text-xs text-zinc-700">próximamente</span>
                </div>
              )}
            </div>
            <div className="p-3">
              <p className="font-mono text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors truncate mb-0.5">
                {site.name}
              </p>
              <p className="font-mono text-xs text-zinc-600 truncate">{site.client}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
