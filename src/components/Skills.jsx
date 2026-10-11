import { FiBarChart2, FiCode, FiCpu, FiDatabase, FiGlobe, FiServer, FiTool } from 'react-icons/fi'
import Section from './Section'
import { skillGroups } from '../data'

const icons = {
  code: FiCode,
  server: FiServer,
  web: FiGlobe,
  database: FiDatabase,
  chart: FiBarChart2,
  tools: FiTool,
  brain: FiCpu,
}

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="What I work with"
      title="Technical Skills"
      subtitle="Languages, frameworks and tools I use to build full-stack applications."
      alt
    >
      <div className="skills-grid">
        {skillGroups.map((group) => {
          const Icon = icons[group.icon] || FiCode
          return (
            <article key={group.title} className="card skill-card">
              <div className="skill-head">
                <span className="icon-box" aria-hidden="true">
                  <Icon />
                </span>
                <h3>{group.title}</h3>
              </div>
              <ul className="tag-list">
                {group.skills.map((skill) => (
                  <li key={skill} className="tag">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
