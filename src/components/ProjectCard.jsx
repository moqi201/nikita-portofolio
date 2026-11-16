
import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project, index }) {
  const mainLink =
    project.demo ||
    project.article ||
    project.github

  return (
    <article
      className={`project-card reveal ${
        project.featured ? 'project-featured' : ''
      }`}
      style={{
        '--reveal-delay': `${index * 80}ms`,
      }}
    >
      {/* PROJECT MEDIA */}
      <div className="project-visual">
        {project.video ? (
          <video
            controls
            playsInline
            preload="metadata"
            poster={project.poster || undefined}
            aria-label={`${project.title} video demonstration`}
          >
            <source
              src={project.video}
              type="video/webm"
            />

            Browser Anda tidak mendukung pemutaran video.
          </video>
        ) : (
          <>
            <img
              src={project.image}
              alt={`${project.title} project preview`}
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = 'none'
              }}
            />

            {mainLink && (
              <a
                href={mainLink}
                target="_blank"
                rel="noreferrer"
                className="project-open"
                aria-label={`View ${project.title}`}
              >
                <ArrowUpRight size={22} />
              </a>
            )}
          </>
        )}
      </div>

      {/* PROJECT INFORMATION */}
      <div className="project-meta">
        <div>
          <p className="project-category">
            {project.category}
            {project.year && ` · ${project.year}`}
          </p>

          <h3>{project.title}</h3>
        </div>

        <div className="project-tags">
          {project.tags?.map((tag) => (
            <span key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* PROJECT DESCRIPTION */}
      <p className="project-description">
        {project.description}
      </p>

      {/* PROJECT LINKS */}
      <div className="project-links">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="project-link project-link-primary"
          >
            Live Demo
            <ArrowUpRight size={14} />
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            Source Code
            <ArrowUpRight size={14} />
          </a>
        )}

        {project.article && (
          <a
            href={project.article}
            target="_blank"
            rel="noreferrer"
            className="project-link project-link-primary"
          >
            Read Journal
            <ArrowUpRight size={14} />
          </a>
        )}

        {project.video && (
          <span className="project-link project-link-muted">
            Video Demo
          </span>
        )}

        {!project.github &&
          !project.demo &&
          !project.article &&
          !project.video && (
            <span className="project-link project-link-muted">
              {project.stageLabel || 'Academic Project'}
            </span>
          )}
      </div>
    </article>
  )
}
