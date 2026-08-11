import { profile, socials } from "../content";

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-line px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-baseline gap-4">
          <span className="font-mono text-sm text-accent">[04]</span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact</h2>
        </div>
        <p className="max-w-2xl text-xl leading-relaxed text-muted">
          Have a project in mind, a role to fill, or just want to talk shop? My inbox is always
          open.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-3 font-mono text-xl text-ink transition-colors hover:text-accent sm:text-2xl"
          >
            <span className="underline decoration-line underline-offset-8">{profile.email}</span>
            <span className="text-accent transition-transform group-hover:translate-x-1">→</span>
          </a>
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm text-muted underline decoration-line underline-offset-4 transition-colors hover:text-accent"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact