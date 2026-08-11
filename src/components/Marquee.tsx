import { skills } from "../content"

const Marquee = () => {
  const items = [
    ...skills,
    'open to work',
    'remote friendly',
    'design systems',
    'performance',
  ]
  const row = [...items, ...items]
  return (
    <div className="overflow-hidden border-y border-line py-3">
      <div className="animate-marquee flex w-max gap-8">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8 font-mono text-sm text-muted">
            {item}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
export default Marquee