'use client'

import { useState } from 'react'
import Link from 'next/link'
import GreenDot from '@/components/ui/GreenDot'

const links = [
  { href: '/#proyectos', label: 'proyectos' },
  { href: '/#sitios',    label: 'sitios' },
  { href: '/#por-que',   label: 'por qué' },
  { href: '/#seguridad', label: 'seguridad' },
  { href: '/#stack',     label: 'stack' },
  { href: '/#agente',    label: 'agente' },
  { href: '/#contacto',  label: 'contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-green/10 bg-base/90 backdrop-blur-sm">
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-sm font-bold text-white hover:text-green transition-colors"
        >
          <GreenDot />
          MIRMIBUG.DEV
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-5">
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

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/525549644749"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono px-3 py-1.5 rounded border border-green/40 text-green hover:bg-green/10 transition-colors"
          >
            contactar
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
            aria-label="Menú"
          >
            <span
              className={`block w-5 h-px bg-zinc-400 transition-all duration-200 ${
                open ? 'rotate-45 translate-y-[3.5px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-px bg-zinc-400 transition-all duration-200 ${
                open ? '-rotate-45 -translate-y-[3.5px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-green/10 bg-base/95 backdrop-blur-sm">
          <ul className="max-w-6xl mx-auto px-6 py-4 space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block font-mono text-sm text-zinc-400 hover:text-green transition-colors py-1"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
