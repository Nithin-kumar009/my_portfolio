import { personalInfo, aboutSkillTags } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="section section-top">
      <div className="about-section reveal">
        <span className="section-label">Who I Am</span>
        <h2 className="section-title" style={{ marginBottom: 28 }}>About Me</h2>
        <p className="about-bio">{personalInfo.bio}</p>
        <div className="about-tags">
          {aboutSkillTags.map((sk) => (
            <span key={sk} className="about-tag-pill glass">{sk}</span>
          ))}
        </div>
      </div>
    </section>
  )
}