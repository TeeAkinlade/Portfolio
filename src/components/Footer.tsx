import { profile } from "../content"

const Footer = () => {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 font-mono text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>
          <span className="text-accent">✦</span> built with react + tailwind
        </p>
      </div>
    </footer>
  )
}

export default Footer