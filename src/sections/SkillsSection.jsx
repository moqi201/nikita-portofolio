import {
  ArrowUpRight,
  Code2,
  Smartphone,
  BookOpen,
} from 'lucide-react'

import SectionTitle from '../components/SectionTitle'

import {
  skillGroups,
  technologies,
} from '../data/portfolio'

const icons = [
  Code2,
  Smartphone,
  BookOpen,
]

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="page-section services-section"
    >
      <SectionTitle
        eyebrow="SKILLS & TECHNOLOGIES"
        title="Learning by"
        accent="building."
        description="Technologies and areas I'm exploring through academic, personal, and practical projects."
      />

      <div className="services-grid">
        {skillGroups.map((group, index) => {
          const Icon = icons[index] || Code2

          return (
            <article
              className="service-card reveal"
              key={group.number}
              style={{
                '--reveal-delay': `${index * 100}ms`,
              }}
            >
              <div className="service-card-top">
                <span>
                  {group.number} / 03
                </span>

                <Icon
                  size={23}
                  strokeWidth={1.5}
                />
              </div>

              <div className="service-card-content">
                <h3>{group.title}</h3>

                <p>
                  {group.description}
                </p>
              </div>

              <div className="skill-tags">
                {group.technologies.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          )
        })}
      </div>

      <div className="technology-area reveal">
        <div className="technology-heading">
          <div>
            <p className="card-index">
              MY TECH STACK
            </p>

            <h3>
              Tools I work <em>with.</em>
            </h3>
          </div>

          <ArrowUpRight
            size={20}
            color="#32e5d0"
          />
        </div>

        <div className="technology-list">
          {technologies.map((tech) => (
            <span key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}