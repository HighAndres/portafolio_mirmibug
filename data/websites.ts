export interface Website {
  name: string
  client: string
  url: string
  screenshot?: string   // ruta relativa a /public, ej: '/screenshots/franslux.jpg'
  tech: string[]
  year: number
}

// Reemplaza estos placeholders con los sitios reales
export const websites: Website[] = [
  {
    name: 'Sitio Corporativo',
    client: 'Cliente A',
    url: 'https://ejemplo.com',
    tech: ['Next.js', 'Tailwind'],
    year: 2024,
  },
  {
    name: 'Landing de Producto',
    client: 'Cliente B',
    url: 'https://ejemplo2.com',
    tech: ['WordPress', 'Elementor'],
    year: 2024,
  },
  {
    name: 'E-commerce',
    client: 'Cliente C',
    url: 'https://ejemplo3.com',
    tech: ['Shopify', 'Liquid'],
    year: 2023,
  },
]
