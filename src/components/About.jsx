import { FiCheckCircle } from 'react-icons/fi'
import Section from './Section'
import { about } from '../data'

export default function About() {
  return (
    <Section id="about" eyebrow="Who I am" title="About Me">
      <div className="about-grid">
        <div className="about-text">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <ul className="about-highlights">
          {about.highlights.map((h) => (
            <li key={h} className="card highlight">
              <FiCheckCircle aria-hidden="true" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
