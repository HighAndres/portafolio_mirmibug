import { stack } from '@/data/stack'

export default function StackSection() {
  return (
    <section id="stack" className="max-w-6xl mx-auto px-6 py-20">
      <p className="font-mono text-xs text-green/60 mb-2 uppercase tracking-widest">
        // stack técnico
      </p>
      <h2 className="font-mono text-3xl font-bold text-white mb-3">
        Herramientas que dominamos
      </h2>
      <p className="text-zinc-400 text-sm mb-10 max-w-lg">
        Seleccionamos la tecnología según el problema, no por tendencia.
        Todo lo que usamos está probado en producción.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stack.map((group) => (
          <div
            key={group.category}
            className="p-5 rounded-lg border border-green/10 bg-surface hover:border-green/25 transition-all duration-300"
          >
            <h3 className="font-mono text-sm font-bold text-white mb-3">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="font-mono text-xs px-2 py-0.5 rounded border border-green/20 text-green/70 bg-green/5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
