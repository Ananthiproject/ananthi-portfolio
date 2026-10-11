import useReveal from '../hooks/useReveal'

// Reusable wrapper: gives every section the same heading style and fade-in.
export default function Section({ id, eyebrow, title, subtitle, children, alt = false }) {
  const [ref, visible] = useReveal()

  return (
    <section id={id} className={`section${alt ? ' section-alt' : ''}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <div ref={ref} className={`reveal${visible ? ' is-visible' : ''}`}>
          <header className="section-head">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h2 id={`${id}-title`} className="section-title">
              {title}
            </h2>
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </header>
          {children}
        </div>
      </div>
    </section>
  )
}
