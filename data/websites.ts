export interface Website {
  name: string
  client: string
  url: string
  description: string
  screenshot: string
  tech: string[]
  year: number
  role: string
  highlights: string[]
}

export const websites: Website[] = [
  {
    name: 'Sitio Corporativo',
    client: 'e-Security',
    url: 'https://e-security.com.mx/',
    description:
      'Empresa de seguridad privada especializada en protección armada, escoltas ejecutivos y vigilancia tecnológica. Presencia en CDMX y área metropolitana.',
    screenshot: '/e-security.png',
    tech: ['Responsive', 'SEO', 'SSL/TLS', 'Performance'],
    year: 2024,
    role: 'Desarrollo, despliegue y seguridad',
    highlights: [
      'Certificado SSL con renovación automática',
      'Headers de seguridad hardened',
      'Optimización de carga < 2s en móvil',
      'Formulario de contacto con protección anti-spam',
    ],
  },
  {
    name: 'Sitio Corporativo',
    client: 'Nalla Hunting',
    url: 'https://www.nallahunting.com/',
    description:
      'Boutique de headhunting y reclutamiento ejecutivo. Conectan talento de alto nivel con empresas que buscan líderes que transformen sus organizaciones.',
    screenshot: '/nalla.png',
    tech: ['Responsive', 'SEO', 'SSL/TLS', 'CDN'],
    year: 2024,
    role: 'Desarrollo, despliegue y seguridad',
    highlights: [
      'Despliegue optimizado con CDN',
      'Certificado SSL y headers hardened',
      'SEO on-page (meta tags, sitemap, robots)',
      'Validado en 5+ dispositivos',
    ],
  },
]
