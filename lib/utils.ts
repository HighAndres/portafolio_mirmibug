export function statusColor(status: 'live' | 'beta' | 'wip'): string {
  switch (status) {
    case 'live': return 'text-green border-green/40'
    case 'beta': return 'text-yellow-400 border-yellow-400/40'
    case 'wip':  return 'text-zinc-400 border-zinc-400/40'
  }
}

export function statusLabel(status: 'live' | 'beta' | 'wip'): string {
  switch (status) {
    case 'live': return '● LIVE'
    case 'beta': return '◐ BETA'
    case 'wip':  return '○ WIP'
  }
}
