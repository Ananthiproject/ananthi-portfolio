import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { navLinks, profile } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#home" className="logo" aria-label="Go to top">
            <span className="logo-mark">AP</span>
            <span className="logo-text">{profile.name}</span>
          </a>
          <p>{profile.title} | Chennai, India</p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="footer-links">
            {navLinks.slice(0, 5).map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="social-row" aria-label="Social links">
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <FiGithub />
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <FiLinkedin />
            </a>
          </li>
          <li>
            <a href={`mailto:${profile.email}`} aria-label="Send an email">
              <FiMail />
            </a>
          </li>
        </ul>
      </div>
      <p className="copyright">&copy; {year} {profile.name}. All rights reserved.</p>
    </footer>
  )
}
