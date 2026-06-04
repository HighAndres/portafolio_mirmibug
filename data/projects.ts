import type { Project } from '@/lib/types'

export const projects: Project[] = [
  {
    slug: 'mirmibug-ticketing',
    title: 'Mirmibug Ticketing',
    status: 'live',
    shortDesc: 'Sistema interno de tickets de soporte técnico para MSP.',
    longDesc:
      'Plataforma de gestión de tickets de soporte desarrollada a medida para Mirmibug IT Solutions. Manejo de clientes, técnicos, prioridades y SLA. Panel de administración con métricas en tiempo real.',
    stack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'API REST'],
    repo: '',
    demo: 'https://tickets.mirmiapps.com',
    terminal: [
      { type: 'command', text: 'deploy --env production' },
      { type: 'success', text: '✓ API backend activo' },
      { type: 'success', text: '✓ Frontend desplegado' },
      { type: 'success', text: '✓ Base de datos conectada' },
      { type: 'success', text: '✓ Autenticación JWT cargada' },
      { type: 'dim',     text: 'sistema en producción — monitoreo activo' },
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
      'Agente conversacional de IA que actúa como representante de ventas de Mirmibug. Responde preguntas, califica leads y agenda citas. Desplegado en infraestructura propia con alta disponibilidad.',
    stack: ['Node.js', 'IA/LLM', 'API REST', 'Docker', 'SSL/TLS'],
    repo: '',
    demo: 'https://brain.mirmibug.com',
    terminal: [
      { type: 'command', text: 'deploy --env production' },
      { type: 'success', text: '✓ Contenedor activo' },
      { type: 'success', text: '✓ Reverse proxy configurado' },
      { type: 'success', text: '✓ Motor de IA conectado' },
      { type: 'success', text: '✓ SSL/TLS habilitado' },
      { type: 'dim',     text: 'agente en línea — disponible 24/7' },
    ],
    features: [
      'Conversación en lenguaje natural en español',
      'Calificación inteligente de leads',
      'Motor de IA con latencia ultra baja',
      'Memoria de contexto por sesión',
      'Desplegado en infraestructura propia con SSL',
    ],
  },
  {
    slug: 'indicadores-franslux',
    title: 'Indicadores Franslux',
    status: 'live',
    shortDesc: 'Dashboard de KPIs e indicadores operativos para franquicia.',
    longDesc:
      'Sistema de visualización de indicadores de negocio desarrollado para Franslux. Permite monitorear ventas, inventario y métricas de desempeño en tiempo real.',
    stack: ['TypeScript', 'React', 'PostgreSQL', 'SSR'],
    repo: '',
    demo: 'https://indicadores.mirmiapps.com',
    terminal: [
      { type: 'command', text: 'deploy --env production' },
      { type: 'success', text: '✓ Migraciones aplicadas' },
      { type: 'success', text: '✓ Dashboard compilado' },
      { type: 'success', text: '✓ Base de datos sincronizada' },
      { type: 'success', text: '✓ SSL activo' },
      { type: 'dim',     text: 'dashboard en producción — datos en tiempo real' },
    ],
    features: [
      'Dashboard con KPIs actualizados en tiempo real',
      'Gráficas de ventas e inventario',
      'Exportación a CSV',
      'Roles: administrador y visualizador',
      'Renderizado server-side para carga instantánea',
    ],
  },
  {
    slug: 'inventario-mirmibug',
    title: 'Inventario Mirmibug',
    status: 'wip',
    shortDesc: 'Control de inventario de hardware y activos de clientes MSP.',
    longDesc:
      'Sistema de gestión de inventario de activos tecnológicos para clientes de Mirmibug. Registro de hardware, licencias de software, fechas de garantía y asignación por cliente. Actualmente en desarrollo.',
    stack: ['TypeScript', 'React', 'PostgreSQL', 'API REST'],
    repo: '',
    terminal: [
      { type: 'command', text: 'status --project inventario' },
      { type: 'output',  text: '◐ CRUD de activos — completo' },
      { type: 'output',  text: '◐ Esquema de datos — completo' },
      { type: 'output',  text: '○ Panel de reportes — en progreso' },
      { type: 'dim',     text: 'WIP — en desarrollo activo' },
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
