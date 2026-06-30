import type { AutomationFlow, AutomationService } from '@/lib/types'

export const automationFlows: AutomationFlow[] = [
  {
    id: 'clasificacion-correos',
    title: 'Clasificación inteligente de correos',
    trigger: 'Webhook recibido',
    steps: [
      { icon: '📨', label: 'Webhook', detail: 'Recibe email entrante' },
      { icon: '🧠', label: 'LLM Classifier', detail: 'Clasifica con IA' },
      { icon: '🔀', label: 'Router', detail: 'Soporte / Ventas / Spam' },
      { icon: '🔔', label: 'Notificación', detail: 'Alerta al equipo' },
      { icon: '📋', label: 'Log', detail: 'Registra en Sheets' },
    ],
    result: 'Correos clasificados y enrutados automáticamente — 0 intervención manual',
    tags: ['n8n', 'OpenAI', 'Gmail', 'Google Sheets'],
  },
  {
    id: 'respuesta-automatica',
    title: 'Respuesta automática con contexto',
    trigger: 'Formulario enviado',
    steps: [
      { icon: '📝', label: 'Formulario', detail: 'Cliente envía mensaje' },
      { icon: '🗄️', label: 'Query DB', detail: 'Historial del cliente' },
      { icon: '⚙️', label: 'Prompt Builder', detail: 'Construye contexto' },
      { icon: '🤖', label: 'LLM Response', detail: 'Genera respuesta' },
      { icon: '📤', label: 'Envío', detail: 'WhatsApp o email' },
    ],
    result: 'Respuestas personalizadas en <30s con historial del cliente',
    tags: ['n8n', 'Groq', 'PostgreSQL', 'WhatsApp'],
  },
  {
    id: 'analisis-reportes',
    title: 'Análisis de datos y reportes',
    trigger: 'Cron semanal',
    steps: [
      { icon: '⏰', label: 'Cron', detail: 'Ejecución programada' },
      { icon: '📊', label: 'Extract Data', detail: 'Consulta ventas' },
      { icon: '🧠', label: 'AI Analysis', detail: 'Tendencias y anomalías' },
      { icon: '📄', label: 'PDF Report', detail: 'Genera reporte' },
      { icon: '✉️', label: 'Email', detail: 'Envía al equipo' },
    ],
    result: 'Reportes semanales con insights de IA — sin mover un dedo',
    tags: ['n8n', 'OpenAI', 'PostgreSQL', 'SMTP'],
  },
  {
    id: 'onboarding-clientes',
    title: 'Onboarding automático de clientes',
    trigger: 'Nuevo cliente en CRM',
    steps: [
      { icon: '👤', label: 'CRM Trigger', detail: 'Cliente registrado' },
      { icon: '📁', label: 'Crear carpeta', detail: 'Google Drive + Docs' },
      { icon: '🧠', label: 'IA Welcome', detail: 'Email personalizado' },
      { icon: '📅', label: 'Agendar', detail: 'Cita de bienvenida' },
      { icon: '💬', label: 'Slack', detail: 'Notifica al equipo' },
    ],
    result: 'Cliente con carpeta, correo de bienvenida y cita agendada en <1 minuto',
    tags: ['n8n', 'OpenAI', 'Google Drive', 'Calendly', 'Slack'],
  },
  {
    id: 'monitoreo-servidores',
    title: 'Monitoreo inteligente de servidores',
    trigger: 'Alerta de infraestructura',
    steps: [
      { icon: '🖥️', label: 'Monitor', detail: 'CPU / RAM / Disco' },
      { icon: '⚠️', label: 'Threshold', detail: 'Detecta anomalía' },
      { icon: '🧠', label: 'AI Diagnóstico', detail: 'Analiza la causa' },
      { icon: '🔧', label: 'Auto-fix', detail: 'Ejecuta remedio' },
      { icon: '📲', label: 'Alerta', detail: 'WhatsApp al admin' },
    ],
    result: 'Incidentes diagnosticados y resueltos antes de que el cliente lo note',
    tags: ['n8n', 'Groq', 'SSH', 'WhatsApp', 'Uptime Kuma'],
  },
  {
    id: 'facturacion-automatica',
    title: 'Facturación y cobranza automática',
    trigger: 'Pedido completado',
    steps: [
      { icon: '🛒', label: 'Pedido', detail: 'Venta confirmada' },
      { icon: '🧾', label: 'Factura', detail: 'Genera CFDI (SAT)' },
      { icon: '📧', label: 'Envío', detail: 'Email con PDF + XML' },
      { icon: '⏳', label: 'Seguimiento', detail: 'Recordatorios de pago' },
      { icon: '✅', label: 'Conciliación', detail: 'Marca como pagado' },
    ],
    result: 'Facturación, envío y seguimiento de cobranza sin intervención manual',
    tags: ['n8n', 'API SAT', 'SMTP', 'PostgreSQL', 'WhatsApp'],
  },
]

export const automationServices: AutomationService[] = [
  {
    icon: '⚡',
    title: 'Automatización de procesos',
    desc: 'Eliminamos tareas repetitivas conectando tus herramientas con flujos inteligentes.',
  },
  {
    icon: '🧠',
    title: 'Integración de IA en flujos',
    desc: 'LLMs integrados en tus procesos: clasificación, generación de texto, análisis de datos.',
  },
  {
    icon: '🔌',
    title: 'Conectores a medida',
    desc: 'APIs, webhooks, bases de datos, WhatsApp, correo, Google Workspace y más.',
  },
  {
    icon: '📡',
    title: 'Monitoreo y mantenimiento',
    desc: 'Tus automatizaciones supervisadas 24/7 con alertas y logs de ejecución.',
  },
]
