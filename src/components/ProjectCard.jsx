import { FiGithub, FiStar } from 'react-icons/fi'

export default function ProjectCard({ project }) {
  return (
    <article className={`card project-card${project.featured ? ' project-featured' : ''}`}>
      <div className="project-body">
        {project.featured && (
          <span className="featured-badge">
            <FiStar aria-hidden="true" /> Main Project
          </span>
        )}
        <h3>{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        {project.features.length > 0 && (
          <ul className="check-list">
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="project-footer">
        <ul className="tag-list" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>

        {project.github && (
          <a
            className="btn btn-outline btn-small"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub aria-hidden="true" /> View on GitHub
          </a>
        )}
      </div>
    </article>
  )
}
