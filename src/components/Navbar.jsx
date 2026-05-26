import { personalInfo } from '../data/portfolioData'

export default function Navbar({ dark, onToggle }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <button className="nav-logo" onClick={() => scrollTo('hero')}>
          portfolio
        </button>

        <div className="nav-links">
          {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <button
              key={item}
              className="nav-link"
              onClick={() => scrollTo(item.toLowerCase())}
            >
              {item}
            </button>
          ))}

          {/* Dark / Light Toggle */}
          <button
            className="theme-toggle"
            onClick={onToggle}
            style={{ background: dark ? 'var(--accent)' : '#e0e0e5' }}
            aria-label="Toggle theme"
          >
            <div className="theme-knob" style={{ left: dark ? 23 : 3 }}>
              {dark ? '🌙' : '☀️'}
            </div>
          </button>
        </div>
      </div>
    </nav>
  )
}