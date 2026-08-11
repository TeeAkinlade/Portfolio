import { profile, skills } from "../content"
import SectionHeading from "./SectionHeading"

const About = () => {
  return (
    <section id="about" className="scroll-mt-20 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" title="About" note="who I am" />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            {profile.about.map((paragraph, i) => (
              <p key={i} className="text-pretty">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="lg:justify-self-end">
            <p className="mb-4 font-mono text-xs tracking-widest text-faint uppercase">stack</p>
            <div className="flex max-w-sm flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-line px-3 py-1 font-mono text-sm text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About