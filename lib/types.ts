export interface Project {
  slug: string
  title: string
  status: 'live' | 'beta' | 'wip'
  shortDesc: string
  longDesc: string
  stack: string[]
  repo?: string
  demo?: string
  screenshot?: string
  terminal: TerminalLine[]
  features: string[]
}

export interface TerminalLine {
  type: 'command' | 'output' | 'success' | 'dim'
  text: string
}
