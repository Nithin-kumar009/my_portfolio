import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-copy">
          © 2025 {personalInfo.familyName} {personalInfo.firstName} {personalInfo.lastName} · Crafted with ❤️
        </span>
        <div className="footer-links">
          <a href={personalInfo.github}   target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
          <a href={`mailto:${personalInfo.email}`} className="footer-link">Email</a>
        </div>
      </div>
    </footer>
  )
}