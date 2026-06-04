export interface StackCategory {
  category: string
  items: string[]
}

export const stack: StackCategory[] = [
  {
    category: 'Backend',
    items: ['Node.js', 'NestJS', 'Express', 'REST APIs', 'WebSockets'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Datos',
    items: ['PostgreSQL', 'Prisma ORM', 'Redis', 'Backups automatizados'],
  },
  {
    category: 'Infraestructura',
    items: ['VPS Linux', 'Docker', 'Nginx', 'SSL/TLS', 'CI/CD'],
  },
  {
    category: 'Automatización',
    items: ['n8n', 'Webhooks', 'Cron jobs', 'APIs de terceros'],
  },
  {
    category: 'Inteligencia artificial',
    items: ['LLMs', 'Prompt engineering', 'Agentes conversacionales', 'RAG'],
  },
]
