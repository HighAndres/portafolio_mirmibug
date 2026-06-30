import type { Project } from '@/lib/types'

export const projects: Project[] = [
  {
    slug: 'mirmibug-ticketing',
    title: 'Mirmibug Ticketing',
    status: 'live',
    shortDesc: 'Sistema interno de tickets de soporte técnico para MSP.',
    longDesc:
      'Plataforma de gestión de tickets de soporte desarrollada a medida para Mirmibug IT Solutions. Manejo de clientes, técnicos, prioridades y SLA. Panel de administración con métricas en tiempo real.',
    stack: ['TypeScript', 'NestJS', 'Next.js 14', 'PostgreSQL', 'Prisma'],
    repo: 'https://github.com/HighAndres/mirmibug-ticketing',
    demo: 'https://tickets.mirmiapps.com',
    terminal: [
      { type: 'command', text: 'npm run dev' },
      { type: 'output',  text: '▶ NestJS API   → http://localhost:3001' },
      { type: 'output',  text: '▶ Next.js App  → http://localhost:3000' },
      { type: 'success', text: '✓ PostgreSQL connected via Prisma' },
      { type: 'success', text: '✓ JWT auth middleware loaded' },
      { type: 'dim',     text: 'watching for file changes...' },
    ],
    features: [
      'Gestión de tickets con estados y prioridades',
      'Dashboard con métricas de SLA',
      'Asignación automática a técnicos',
      'Notificaciones por correo',
      'Historial completo de actividad',
    ],
  },
  {
    slug: 'mirmibot',
    title: 'Mirmibot',
    status: 'live',
    shortDesc: 'Agente de ventas con IA para calificación y atención a clientes.',
    longDesc:
      'Agente conversacional de IA potenciado por Groq (LLaMA 3) que actúa como representante de ventas de Mirmibug. Responde preguntas, califica leads y agenda citas. Desplegado en VPS con Docker + Nginx.',
    stack: ['Node.js', 'Express', 'Groq SDK', 'Docker', 'Nginx'],
    repo: 'https://github.com/HighAndres/mirmibot',
    demo: 'https://brain.mirmibug.com',
    terminal: [
      { type: 'command', text: 'docker compose up -d' },
      { type: 'output',  text: 'Creating mirmibot_app_1   ... done' },
      { type: 'output',  text: 'Creating mirmibot_nginx_1 ... done' },
      { type: 'success', text: '✓ API running on :3000' },
      { type: 'success', text: '✓ Groq SDK connected (llama-3.3-70b-versatile)' },
      { type: 'dim',     text: 'NGINX proxy → brain.mirmibug.com' },
    ],
    features: [
      'Conversación en lenguaje natural en español',
      'Calificación inteligente de leads',
      'Integración con Groq LLaMA 3.3 70B',
      'Memoria de contexto por sesión',
      'Desplegado en VPS con Nginx reverse proxy',
    ],
  },
  {
    slug: 'indicadores-franslux',
    title: 'Indicadores Franslux',
    status: 'live',
    shortDesc: 'Dashboard de KPIs e indicadores operativos para franquicia.',
    longDesc:
      'Sistema de visualización de indicadores de negocio desarrollado para Franslux. Permite monitorear ventas, inventario y métricas de desempeño. Datos en tiempo real desde PostgreSQL con Next.js SSR.',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    repo: 'https://github.com/HighAndres/indicadores-franslux',
    demo: 'https://indicadores.mirmiapps.com',
    terminal: [
      { type: 'command', text: 'npx prisma migrate deploy' },
      { type: 'success', text: '✓ 12 migrations applied' },
      { type: 'command', text: 'npm run build' },
      { type: 'output',  text: 'Route (app)                Size' },
      { type: 'output',  text: '├ /dashboard               4.2 kB' },
      { type: 'success', text: '✓ Build complete in 18.3s' },
    ],
    features: [
      'Dashboard con KPIs actualizados en tiempo real',
      'Gráficas de ventas e inventario',
      'Exportación a CSV',
      'Roles: administrador y visualizador',
      'SSR con Next.js para carga instantánea',
    ],
  },
  {
    slug: 'aurashop',
    title: 'AuraShop',
    status: 'live',
    shortDesc: 'Plataforma e-commerce adaptable con panel admin, roles y reportes.',
    longDesc:
      'Tienda en línea con arquitectura flexible que se acopla a cualquier catálogo de productos. Panel de administración con tres roles (superadmin, admin, vendedor), gestión de pedidos con flujo de estados, paquetes/combos con precio especial, control de inventario, reportes de ventas y bitácora de auditoría.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
    repo: 'https://github.com/HighAndres/aura_shop',
    demo: 'https://aurashop.mirmiapps.com',
    terminal: [
      { type: 'command', text: 'npm run build' },
      { type: 'output',  text: 'Route (app)                Size' },
      { type: 'output',  text: '├ /admin/productos         4.8 kB' },
      { type: 'output',  text: '├ /admin/pedidos           3.6 kB' },
      { type: 'output',  text: '├ /admin/reportes          3.2 kB' },
      { type: 'success', text: '✓ Build complete — panel admin + tienda' },
    ],
    features: [
      'Panel admin con roles: superadmin, admin y vendedor',
      'Gestión de productos con marcas, categorías y variantes',
      'Paquetes/combos con precio especial y cálculo de ahorro',
      'Flujo de pedidos: pendiente → pagado → enviado → entregado',
      'Control de inventario por SKU y almacén',
      'Reportes de ventas, productos top y alertas de stock',
      'Bitácora de auditoría con IP y detalle de cambios',
      'Carrito de compras y checkout sin cuenta',
    ],
  },
  {
    slug: 'inventario-mirmibug',
    title: 'Inventario Mirmibug',
    status: 'wip',
    shortDesc: 'Control de inventario de hardware y activos de clientes MSP.',
    longDesc:
      'Sistema de gestión de inventario de activos tecnológicos para clientes de Mirmibug. Registro de hardware, licencias de software, fechas de garantía y asignación por cliente. Actualmente en desarrollo.',
    stack: ['TypeScript', 'Next.js', 'PostgreSQL', 'Prisma'],
    repo: 'https://github.com/HighAndres/inventario-mirmibug',
    terminal: [
      { type: 'command', text: 'git log --oneline -5' },
      { type: 'output',  text: 'a3f1c2e feat: asset CRUD API' },
      { type: 'output',  text: '9b2d4a1 feat: Prisma schema v1' },
      { type: 'output',  text: '7e8f3c0 init: Next.js + TypeScript' },
      { type: 'dim',     text: 'branch: main | WIP — en desarrollo activo' },
    ],
    features: [
      'Catálogo de hardware con número de serie',
      'Asignación de activos por cliente',
      'Tracking de garantías y fechas de compra',
      'Control de licencias de software',
      'Exportación de inventario por cliente',
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
