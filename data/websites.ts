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
  securityScore: number
}

export const websites: Website[] = [
  {
    name: 'Sitio Corporativo',
    client: 'e-Security',
    url: 'https://e-security.com.mx/',
    description:
      'Empresa de seguridad privada especializada en protección armada, escoltas ejecutivos y vigilancia tecnológica. Presencia en CDMX y área metropolitana.',
    screenshot: '/e-security.png',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'SEO', 'SSL/TLS'],
    year: 2024,
    role: 'Desarrollo, despliegue y seguridad',
    highlights: [
      'Certificado SSL configurado y renovación automática',
      'Headers de seguridad (CSP, HSTS, X-Frame-Options)',
      'Optimización de carga < 2s en móvil',
      'Formulario de contacto con protección anti-spam',
    ],
    securityScore: 95,
  },
  {
    name: 'Sitio Corporativo',
    client: 'Nalla Hunting',
    url: 'https://www.nallahunting.com/',
    description:
      'Boutique de headhunting y reclutamiento ejecutivo. Conectan talento de alto nivel con empresas que buscan líderes que transformen sus organizaciones.',
    screenshot: '/nalla.png',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'SEO', 'SSL/TLS'],
    year: 2024,
    role: 'Desarrollo, despliegue y seguridad',
    highlights: [
      'Despliegue en servidor optimizado con CDN',
      'Certificado SSL y headers de seguridad hardened',
      'SEO on-page configurado (meta tags, sitemap, robots)',
      'Diseño responsive validado en 5+ dispositivos',
    ],
    securityScore: 93,
  },
]
