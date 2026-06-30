import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'
import { DM_Sans } from 'next/font/google'
import NetworkBackground from '@/components/ui/NetworkBackground'
import './globals.css'

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Mirmibug IT Solutions — MSP en CDMX',
  description:
    'Soluciones tecnológicas a medida: desarrollo de software, automatización e inteligencia artificial para empresas en Ciudad de México.',
  keywords: ['MSP', 'IT', 'CDMX', 'desarrollo web', 'automatización', 'soporte técnico'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${spaceMono.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-base text-white antialiased">
        <NetworkBackground />
        <div className="relative z-10 flex flex-col min-h-full">
          {children}
        </div>
      </body>
    </html>
  )
}
