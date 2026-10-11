import { FiBriefcase, FiCalendar } from 'react-icons/fi'
import Section from './Section'
import { experience } from '../data'

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="My journey"
      title="Professional Experience"
      subtitle="Internships in full-stack development, data science and AI."
    >
      <ol className="timeline">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="timeline-item">
            <span className="timeline-dot" aria-hidden="true">
              <FiBriefcase />
            </span>
            <article className="card timeline-card">
              <header>
                <h3>{job.role}</h3>
                <p className="timeline-company">{job.company}</p>
                <p className="timeline-period">
                  <FiCalendar aria-hidden="true" /> {job.period}
                </p>
              </header>
              <ul className="check-list">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <ul className="tag-list">
                {job.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  )
}
