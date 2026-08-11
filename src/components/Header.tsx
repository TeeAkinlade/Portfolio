import { profile } from "../content"

const sections = [
	{ id: "about", label: "About" },
	{ id: "work", label: "Work" },
	{ id: "experience", label: "Experience" },
	{ id: "contact", label: "Contact" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-void/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight">
          <span className="text-accent">~/</span>
          {profile.name.toLowerCase().replace(/\s+/g, '-')}
        </a>
        <ul className="hidden gap-1 md:flex">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="px-3 py-1.5 font-mono text-sm text-muted transition-colors hover:text-ink"
              >
                <span className="text-accent">0{sections.indexOf(section) + 1}.</span> {section.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`mailto:${profile.email}`}
          className="rounded border border-accent/50 px-3 py-1.5 font-mono text-sm text-accent transition-colors hover:bg-accent hover:text-void"
        >
          Hire me
        </a>
      </nav>
    </header>
  )
}
export default Header