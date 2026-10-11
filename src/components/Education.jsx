import { FiAward, FiBookOpen, FiCalendar } from 'react-icons/fi'
import Section from './Section'
import { education } from '../data'

export default function Education() {
  return (
    <Section id="education" eyebrow="My learning" title="Education">
      <div className="edu-grid">
        {education.map((item) => (
          <article key={item.degree} className="card edu-card">
            <span className="icon-box" aria-hidden="true">
              <FiBookOpen />
            </span>
            <div>
              <h3>{item.degree}</h3>
              <p className="edu-school">{item.school}</p>
              <p className="edu-meta">
                <span>
                  <FiCalendar aria-hidden="true" /> {item.period}
                </span>
                <span>
                  <FiAward aria-hidden="true" /> {item.score}
                </span>
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
