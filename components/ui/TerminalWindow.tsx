import type { TerminalLine } from '@/lib/types'

const lineClass: Record<TerminalLine['type'], string> = {
  command: 'text-green font-mono',
  output:  'text-zinc-300 font-mono',
  success: 'text-green font-mono',
  dim:     'text-zinc-500 font-mono',
}

const linePrefix: Record<TerminalLine['type'], string> = {
  command: '$ ',
  output:  '  ',
  success: '  ',
  dim:     '  ',
}

interface Props {
  title?: string
  lines: TerminalLine[]
}

export default function TerminalWindow({ title = 'terminal', lines }: Props) {
  return (
    <div className="rounded-lg border border-green/20 bg-surface overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-green/10 bg-black/30">
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-green/70" />
        <span className="ml-2 text-xs font-mono text-zinc-500">{title}</span>
      </div>
      <div className="p-4 space-y-1 text-sm">
        {lines.map((line, i) => (
          <p key={i} className={lineClass[line.type]}>
            <span className="select-none text-green/50">{linePrefix[line.type]}</span>
            {line.text}
          </p>
        ))}
        <p className="font-mono text-green">
          <span className="select-none">$ </span>
          <span className="animate-blink">▌</span>
        </p>
      </div>
    </div>
  )
}
