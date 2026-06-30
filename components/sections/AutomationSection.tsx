'use client'

import { useState } from 'react'
import { automationFlows, automationServices } from '@/data/automations'
import Tag from '@/components/ui/Tag'
import GreenDot from '@/components/ui/GreenDot'

export default function AutomationSection() {
  const [activeFlow, setActiveFlow] = useState(0)
  const flow = automationFlows[activeFlow]

  return (
    <section id="automatizacion" className="max-w-6xl mx-auto px-6 py-20">
      <p className="font-mono text-xs text-green/60 mb-2 uppercase tracking-widest">
        // automatización
      </p>
      <h2 className="font-mono text-3xl font-bold text-white mb-3">
        Flujos inteligentes<br />
        <span className="text-green">con n8n + IA.</span>
      </h2>
      <p className="text-zinc-400 text-sm mb-10 max-w-lg">
        Conectamos tus herramientas, eliminamos tareas manuales e integramos
        inteligencia artificial en tus procesos de negocio.
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {automationFlows.map((f, i) => (
          <button
            key={f.id}
            onClick={() => setActiveFlow(i)}
            className={`font-mono text-xs px-3 py-1.5 rounded border transition-all duration-300 ${
              i === activeFlow
                ? 'border-green/40 bg-green/10 text-green'
                : 'border-green/10 text-zinc-500 hover:border-green/25 hover:text-zinc-300'
            }`}
          >
            {f.title}
          </button>
        ))}
      </div>

      {/* Flow Visualizer */}
      <div className="border border-green/20 rounded-lg bg-surface overflow-hidden mb-10">
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-green/10">
          <GreenDot />
          <span className="font-mono text-xs text-white font-bold">{flow.title}</span>
          <span className="font-mono text-[10px] text-zinc-500 ml-auto">{flow.trigger}</span>
        </div>

        {/* Flow Diagram */}
        <div className="p-6 min-h-[220px] flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0">
            {flow.steps.map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center">
                {/* Node */}
                <div className="flex flex-col items-center gap-1.5 min-w-[80px]">
                  <div className="w-12 h-12 rounded-lg border border-green/20 bg-green/5 flex items-center justify-center text-lg">
                    {step.icon}
                  </div>
                  <span className="font-mono text-xs text-white text-center">{step.label}</span>
                  <span className="font-mono text-[10px] text-zinc-600 text-center">{step.detail}</span>
                </div>

                {/* Connector */}
                {i < flow.steps.length - 1 && (
                  <>
                    {/* Horizontal connector (desktop) */}
                    <div className="hidden md:flex items-center px-2 -mt-6">
                      <div className="w-6 h-px bg-green/30" />
                      <span className="text-green/50 text-xs">▸</span>
                    </div>
                    {/* Vertical connector (mobile) */}
                    <div className="md:hidden flex flex-col items-center py-1">
                      <div className="w-px h-4 bg-green/30" />
                      <span className="text-green/50 text-[10px]">▾</span>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Result + Tags */}
        <div className="px-4 pb-4 space-y-3">
          <div className="px-3 py-2 rounded bg-black/40 border border-green/10">
            <code className="font-mono text-xs text-green/70">→ {flow.result}</code>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {flow.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {automationServices.map((s) => (
          <div
            key={s.title}
            className="p-5 rounded-lg border border-green/10 bg-surface hover:border-green/25 transition-all duration-300"
          >
            <span className="text-2xl mb-3 block">{s.icon}</span>
            <h3 className="font-mono text-sm font-bold text-white mb-1">{s.title}</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="border border-green/15 rounded-lg bg-surface p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-mono text-sm text-white font-bold">
            ¿Tienes un proceso que quieres automatizar?
          </p>
          <p className="text-zinc-400 text-xs mt-1">
            Evaluamos tu caso sin costo y te proponemos un flujo en n8n + IA.
          </p>
        </div>
        <a
          href="#contacto"
          className="font-mono text-sm px-5 py-3 rounded-lg border border-green bg-green/10 text-green hover:bg-green/20 transition-colors whitespace-nowrap"
        >
          Solicitar evaluación →
        </a>
      </div>
    </section>
  )
}
