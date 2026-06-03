export interface Website {
  name: string
  client: string
  url: string
  description: string
  screenshot?: string
  tech: string[]
  year: number
}

export const websites: Website[] = [
  {
    name: 'Sitio Corporativo',
    client: 'e-Security',
    url: 'https://e-security.com.mx/',
    description: 'Sitio web para empresa de seguridad privada especializada en protección armada, escoltas y vigilancia tecnológica.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    year: 2024,
  },
  {
    name: 'Sitio Corporativo',
    client: 'Nalla Hunting',
    url: 'https://www.nallahunting.com/',
    description: 'Sitio web para boutique de headhunting y reclutamiento ejecutivo especializado.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    year: 2024,
  },
]
