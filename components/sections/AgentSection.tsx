import GreenDot from '@/components/ui/GreenDot'

export default function AgentSection() {
  return (
    <section id="agente" className="max-w-6xl mx-auto px-6 py-20">
      <p className="font-mono text-xs text-green/60 mb-2 uppercase tracking-widest">
        // agente ia
      </p>
      <h2 className="font-mono text-3xl font-bold text-white mb-3">
        Habla con Mirmibot
      </h2>
      <p className="text-zinc-400 text-sm mb-8 max-w-lg">
        Nuestro agente de ventas con IA puede responder tus dudas, cotizar
        servicios y agendar una llamada. Disponible 24/7.
      </p>

      <div className="border border-green/20 rounded-lg overflow-hidden bg-surface">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-green/10 bg-black/20">
          <GreenDot />
          <span className="font-mono text-xs text-zinc-400">Mirmibot — brain.mirmibug.com</span>
          <a
            href="https://brain.mirmibug.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto font-mono text-xs text-green/60 hover:text-green transition-colors"
          >
            abrir en nueva pestaña ↗
          </a>
        </div>
        <iframe
          src="https://brain.mirmibug.com"
          title="Mirmibot — Agente de ventas Mirmibug"
          className="w-full h-[600px] border-0"
          allow="microphone"
        />
      </div>
    </section>
  )
}
