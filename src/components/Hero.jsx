import { useState } from 'react'
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { profile, stats } from '../data'

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false)

  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="hero-glow hero-glow-1" aria-hidden="true" />
      <div className="hero-glow hero-glow-2" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-text">
          <span className="hero-badge">
            <span className="pulse-dot" aria-hidden="true" />
            Open to Python &amp; Backend roles
          </span>

          <p className="hero-hello">Hi, I&apos;m</p>
          <h1 className="hero-name">{profile.name}</h1>
          <ul className="hero-role" aria-label="Roles">
            {profile.roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
          <p className="hero-tagline">{profile.tagline}</p>

          <p className="hero-location">
            <FiMapPin aria-hidden="true" /> {profile.location}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects <FiArrowRight aria-hidden="true" />
            </a>
            <a href={profile.resume} download={profile.resumeFileName} className="btn btn-outline">
              <FiDownload aria-hidden="true" /> Download Resume
            </a>
          </div>

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
            <li>
              <a href={profile.phoneLink} aria-label="Call Ananthi">
                <FiPhone />
              </a>
            </li>
          </ul>
        </div>

        <div className="hero-photo-wrap">
          <div className="photo-ring" aria-hidden="true" />
          <div className="photo-frame">
            {photoFailed ? (
              <div className="photo-fallback" role="img" aria-label="Initials AP">
                AP
              </div>
            ) : (
              <img
                src={profile.photo}
                alt="Portrait of Ananthi P."
                width="413"
                height="531"
                onError={() => setPhotoFailed(true)}
              />
            )}
          </div>
        </div>
      </div>

      <div className="container">
        <ul className="stats">
          {stats.map((s) => (
            <li key={s.label} className="stat">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
