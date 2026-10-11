import Section from './Section'
import ProjectCard from './ProjectCard'
import { projects } from '../data'

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="What I have built"
      title="Projects"
      subtitle="Full-stack and machine learning projects built with Python."
      alt
    >
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  )
}
