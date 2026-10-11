import { FiDownload, FiFileText } from 'react-icons/fi'
import Section from './Section'
import { profile } from '../data'

export default function Resume() {
  return (
    <Section id="resume" eyebrow="Take a closer look" title="Download Resume">
      <div className="card resume-card">
        <span className="icon-box icon-box-lg" aria-hidden="true">
          <FiFileText />
        </span>
        <div className="resume-text">
          <h3>Want the full details?</h3>
          <p>
            Download my resume to see my skills, internships, projects and education in one
            place.
          </p>
        </div>
        <a href={profile.resume} download={profile.resumeFileName} className="btn btn-primary">
          <FiDownload aria-hidden="true" /> Download Resume (PDF)
        </a>
      </div>
    </Section>
  )
}
