import { personalInfo } from '../data/portfolioData'

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="hero-section">
      {/* Background blobs */}
      <div className="hero-blob blob1" style={{
        top: '8%', left: '5%', width: 480, height: 480,
        background: 'radial-gradient(circle, rgba(0,113,227,0.1), transparent)',
        animation: 'blob1 9s ease-in-out infinite',
      }} />
      <div className="hero-blob blob2" style={{
        bottom: '10%', right: '3%', width: 560, height: 560,
        background: 'radial-gradient(circle, rgba(140,80,255,0.07), transparent)',
        animation: 'blob2 11s ease-in-out infinite',
      }} />
      <div className="hero-blob blob3" style={{
        top: '45%', right: '28%', width: 320, height: 320,
        background: 'radial-gradient(circle, rgba(0,190,110,0.05), transparent)',
        animation: 'blob3 13s ease-in-out infinite',
      }} />

      <div className="hero-inner">
        {/* Text */}
        <div className="hero-text">
          <p className="hero-role fu1">{personalInfo.role}</p>

          <div className="fu2">
            <p className="hero-family">{personalInfo.familyName}</p>
            <h1 className="hero-name-main">
              {personalInfo.firstName}
              <br />
              <span className="hero-name-accent">{personalInfo.lastName}</span>
            </h1>
          </div>

          <p className="hero-tagline fu3">{personalInfo.tagline}</p>

          <div className="hero-buttons fu4">
            <button className="btn-primary" onClick={() => scrollTo('projects')}>
              View Projects
            </button>
            <button className="btn-outline" onClick={() => scrollTo('contact')}>
              Contact Me
            </button>
          </div>
        </div>

        {/* Profile Card */}
        <div className="profile-card glass float-anim fu4">
          <div className="profile-avatar">
            {personalInfo.photoUrl ? (
              <img src={personalInfo.photoUrl} alt={personalInfo.firstName} />
            ) : (
              <div className="profile-avatar-fallback">
                <span className="profile-initials">NK</span>
              </div>
            )}
          </div>

          <div style={{ textAlign: 'center' }}>
            <p className="profile-name">
              {personalInfo.firstName} {personalInfo.lastName}
            </p>
            <p className="profile-title">AI &amp; Data Science Student</p>
            <div className="profile-divider" />
          </div>

          <div className="profile-socials">
            {[
              { label: 'GH', href: personalInfo.github },
              { label: 'LI', href: personalInfo.linkedin },
              { label: '@',  href: `mailto:${personalInfo.email}` },
            ].map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                className="profile-social-btn">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}