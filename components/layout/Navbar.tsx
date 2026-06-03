import Link from 'next/link'
import GreenDot from '@/components/ui/GreenDot'

const links = [
  { href: '/#proyectos', label: 'proyectos' },
  { href: '/#stack',     label: 'stack' },
  { href: '/#agente',    label: 'agente' },
  { href: '/#contacto',  label: 'contacto' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-green/10 bg-base/90 backdrop-blur-sm">
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-mono text-sm font-bold text-white hover:text-green transition-colors">
          <GreenDot />
          MIRMIBUG.DEV
        </Link>
        <ul className="hidden sm:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-mono text-xs text-zinc-400 hover:text-green transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="https://wa.me/525512345678"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono px-3 py-1.5 rounded border border-green/40 text-green hover:bg-green/10 transition-colors"
        >
          contactar
        </a>
      </nav>
    </header>
  )
}
