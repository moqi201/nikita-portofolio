
import { useState } from 'react'

import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'

import { projects } from '../data/portfolio'

const filters = ['All', 'Web', 'Mobile']

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter(
          (project) => project.type === activeFilter
        )

  return (
    <section
      id="projects"
      className="page-section projects-section"
    >
      <div className="projects-heading-row">
        <SectionTitle
          eyebrow="SELECTED WORK / 2025—2026"
          title="Things I've"
          accent="created."
          description="A curated collection of web applications and mobile experiences from my learning and development journey."
        />

        <span className="projects-count">
          ({String(filteredProjects.length).padStart(2, '0')} PROJECTS)
        </span>
      </div>

      <div className="project-filters">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`project-filter ${
              activeFilter === filter ? 'active' : ''
            }`}
            aria-pressed={activeFilter === filter}
          >
            {filter === 'All' ? 'All Projects' : filter}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
          />
        ))}
      </div>

      <div className="all-projects-link">
        <a
          href="https://github.com/moqi201?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          Explore all repositories
          <span>↗</span>
        </a>
      </div>
    </section>
  )
}
