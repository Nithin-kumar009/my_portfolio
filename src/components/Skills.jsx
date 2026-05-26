import { skills } from '../data/portfolioData'

function SkillRing({ percent }) {
  const r = 38
  const circ = 2 * Math.PI * r
  const offset = circ * (1 - percent / 100)

  return (
    <svg width="88" height="88" style={{ position: 'absolute', top: 0, left: 0 }}>
      {/* Track */}
      <circle cx="44" cy="44" r={r}
        fill="none" stroke="var(--ring-track)" strokeWidth="5" />
      {/* Fill */}
      <circle cx="44" cy="44" r={r}
        fill="none" stroke="var(--accent)" strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        transform="rotate(-90 44 44)"
        className="ring-animated"
        style={{ '--full': circ, '--offset': offset }}
      />
    </svg>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 72 }}>
          <span className="section-label">My Toolkit</span>
          <h2 className="section-title">Skills</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div key={i} className={`skill-card glass reveal d${(i % 3) + 1}`}>
              <div className="skill-ring-wrap">
                <SkillRing percent={skill.percent} />
                <div className="skill-icon">{skill.icon}</div>
              </div>
              <p className="skill-name">{skill.name}</p>
              <p className="skill-pct">{skill.percent}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}