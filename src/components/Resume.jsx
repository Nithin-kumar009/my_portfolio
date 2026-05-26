import { personalInfo } from '../data/portfolioData'

export default function Resume() {
  return (
    <section id="resume" className="section">
      <div className="resume-inner">
        <div className="reveal">
          <span className="section-label">My CV</span>
          <h2 className="section-title" style={{ marginBottom: 20 }}>Resume</h2>
          <p className="section-sub" style={{ marginBottom: 52 }}>
            Download my resume to see my full experience, education, and achievements.
          </p>

          <div className="resume-card glass">
            <div className="resume-icon">📄</div>
            <h3 className="resume-name">
              {personalInfo.familyName} {personalInfo.firstName.toUpperCase()} {personalInfo.lastName.toUpperCase()}
            </h3>
            <p className="resume-role">{personalInfo.role}</p>
            <p className="resume-edu">AI &amp; Data Science Engineering Student</p>

            <a href={personalInfo.resumeUrl} download>
              <button className="btn-primary btn-resume">↓ Download Resume</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}