export default function GreenDot({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-block w-2 h-2 rounded-full bg-green animate-pulse-dot ${className}`}
    />
  )
}
