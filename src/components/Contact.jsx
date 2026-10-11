import { useState } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'
import Section from './Section'
import { profile } from '../data'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  // There is no server: the form opens the visitor's email app with the message filled in.
  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const items = [
    { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: FiPhone, label: 'Phone', value: profile.phone, href: profile.phoneLink },
    { icon: FiMapPin, label: 'Location', value: profile.location },
    { icon: FiGithub, label: 'GitHub', value: 'github.com/Ananthiproject', href: profile.github, external: true },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/ananthi-p-60774a2a8',
      href: profile.linkedin,
      external: true,
    },
  ]

  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title="Contact"
      subtitle="I am open to Python Developer, Backend Developer and Python Full Stack Developer opportunities."
      alt
    >
      <div className="contact-grid">
        <ul className="contact-list">
          {items.map(({ icon: Icon, label, value, href, external }) => (
            <li key={label} className="card contact-item">
              <span className="icon-box" aria-hidden="true">
                <Icon />
              </span>
              <div>
                <span className="contact-label">{label}</span>
                {href ? (
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {value}
                  </a>
                ) : (
                  <span className="contact-value">{value}</span>
                )}
              </div>
            </li>
          ))}
        </ul>

        <form className="card contact-form" onSubmit={handleSubmit}>
          <h3>Send me a message</h3>
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" required autoComplete="name" value={form.name} onChange={update} />

          <label htmlFor="email">Your email</label>
          <input id="email" name="email" type="email" required autoComplete="email" value={form.email} onChange={update} />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required value={form.message} onChange={update} />

          <button type="submit" className="btn btn-primary">
            <FiSend aria-hidden="true" /> Send Message
          </button>
          <p className="form-note">This opens your email app with the message ready to send.</p>
        </form>
      </div>
    </Section>
  )
}
