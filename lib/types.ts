export interface Project {
  slug: string
  title: string
  status: 'live' | 'beta' | 'wip'
  shortDesc: string
  longDesc: string
  stack: string[]
  repo: string
  demo?: string
  screenshot?: string
  terminal: TerminalLine[]
  features: string[]
}

export interface TerminalLine {
  type: 'command' | 'output' | 'success' | 'dim'
  text: string
}

export interface StackItem {
  name: string
  level: number
}

export interface FlowStep {
  icon: string
  label: string
  detail: string
}

export interface AutomationFlow {
  id: string
  title: string
  trigger: string
  steps: FlowStep[]
  result: string
  tags: string[]
}

export interface AutomationService {
  icon: string
  title: string
  desc: string
}
