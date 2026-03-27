import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={`${project.title}-${project.period}`}
            project={project}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
