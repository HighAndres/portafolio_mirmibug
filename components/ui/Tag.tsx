export default function Tag({ label }: { label: string }) {
  return (
    <span className="inline-block px-2 py-0.5 text-xs font-mono border border-green/25 text-green/80 rounded bg-green/5">
      {label}
    </span>
  )
}
