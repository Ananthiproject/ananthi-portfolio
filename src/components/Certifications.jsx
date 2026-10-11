import { FiAward } from 'react-icons/fi'
import Section from './Section'
import { certifications } from '../data'

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Continuous learning"
      title="Certifications"
      subtitle="Courses and certificates that support my development skills."
      alt
    >
      <div className="cert-grid">
        {certifications.map((cert) => (
          <article key={cert.title} className="card cert-card">
            <span className="icon-box" aria-hidden="true">
              <FiAward />
            </span>
            <div>
              <h3>{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              {cert.period && <p className="cert-period">{cert.period}</p>}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
