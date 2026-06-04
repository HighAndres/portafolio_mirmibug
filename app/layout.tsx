import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'
import { DM_Sans } from 'next/font/google'
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
  metadataBase: new URL('https://dev.mirmiapps.com'),
  openGraph: {
    title: 'Mirmibug IT Solutions — MSP en CDMX',
    description:
      'Desarrollo de software, automatización e inteligencia artificial para empresas en Ciudad de México.',
    url: 'https://dev.mirmiapps.com',
    siteName: 'Mirmibug IT Solutions',
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Mirmibug IT Solutions',
    description:
      'Soluciones IT a medida: software, automatización e IA para empresas en CDMX.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${spaceMono.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-base text-white antialiased">
        {children}
      </body>
    </html>
  )
}
