import GreenDot from '@/components/ui/GreenDot'

const stats = [
  { value: '4+', label: 'sistemas en producción' },
  { value: 'MSP', label: 'Ciudad de México' },
  { value: '∞', label: 'litros de café' },
]

export default function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-24 pb-20">
      <div className="flex items-center gap-2 mb-6">
        <GreenDot />
        <span className="font-mono text-xs text-green/80 tracking-widest uppercase">
          MSP · Desarrollo · Automatización · IA
        </span>
      </div>

      <h1 className="font-mono text-4xl sm:text-6xl font-bold text-white leading-tight mb-6">
        Soluciones IT<br />
        <span className="text-green">a medida</span><br />
        para tu empresa.
      </h1>

      <p className="text-zinc-400 text-lg max-w-xl mb-10 leading-relaxed">
        Construimos software, automatizamos procesos e integramos IA para que tu
        empresa crezca sin fricción técnica.
      </p>

      <div className="flex flex-wrap gap-4 mb-16">
        <a
          href="#proyectos"
          className="font-mono text-sm px-5 py-2.5 rounded border border-green bg-green/10 text-green hover:bg-green/20 transition-colors"
        >
          ver proyectos →
        </a>
        <a
          href="#agente"
          className="font-mono text-sm px-5 py-2.5 rounded border border-green/25 text-zinc-400 hover:border-green/50 hover:text-white transition-colors"
        >
          hablar con Mirmibot
        </a>
      </div>

      <div className="grid grid-cols-3 gap-px border border-green/10 rounded-lg overflow-hidden bg-green/10 max-w-md">
        {stats.map((s) => (
          <div key={s.label} className="bg-surface px-4 py-4 text-center">
            <p className="font-mono text-2xl font-bold text-green">{s.value}</p>
            <p className="font-mono text-xs text-zinc-500 mt-1 leading-tight">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
