import { experience } from "../content"
import SectionHeading from "./SectionHeading"

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-20 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="03" title="Experience" note="where I've been" />
        <ul className="space-y-10">
          {experience.map((item, i) => (
            <li
              key={`${item.company}-${item.period}`}
              className="grid gap-3 border-l-2 border-line pl-6 transition-colors hover:border-accent sm:grid-cols-[8rem_1fr]"
            >
              <div>
                <p className="font-mono text-sm text-faint tabular-nums">{item.period}</p>
                <p className="font-mono text-xs text-faint">/0{i + 1}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight">
                  {item.role}{' '}
                  <span className="text-muted">
                    @ <span className="text-accent">{item.company}</span>
                  </span>
                </h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-muted">{item.summary}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Experience