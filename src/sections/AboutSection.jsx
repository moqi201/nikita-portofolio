import {
  Code2,
  Palette,
  Layers,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react'

import SectionTitle from '../components/SectionTitle'

import {
  profile,
  primarySkills,
} from '../data/portfolio'

const skillIcons = [
  Code2,
  Palette,
  Layers,
  Sparkles,
  Code2,
  Layers,
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="page-section about-section"
    >
      <SectionTitle
        eyebrow="A LITTLE INTRODUCTION"
        title="A student with"
        accent="curiosity."
        description="Exploring technology, building projects, and learning something new along the way."
      />

      <div className="about-grid">
        <div className="about-photo-card reveal">
          <img
            src="/images/profile.png"
            alt={profile.name}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = 'none'
            }}
          />

          <div className="photo-label">
            <span>01 / PROFILE</span>
            <strong>{profile.name}</strong>
          </div>
        </div>

        <div className="about-main-card reveal">
          <p className="card-index">
            GET TO KNOW ME
          </p>

          <h3>
            Learning, creating, and
            <em> growing.</em>
          </h3>

          <p className="about-copy">
            {profile.about}
          </p>

          <div className="skills-list">
            {primarySkills.map((skill, index) => {
              const Icon = skillIcons[index] || Code2

              return (
                <span
                  className="skill-pill"
                  key={skill}
                >
                  <Icon size={16} />
                  {skill}
                </span>
              )
            })}
          </div>

          <a
            href="#skills"
            className="text-link"
          >
            Explore my technologies
            <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="about-stats">
          <div className="stat-card stat-card-accent reveal">
            <span>CURRENT SEMESTER</span>

            <strong>
              {profile.semester}
            </strong>

            <small>
              {profile.university}
            </small>
          </div>

          <div className="stat-card reveal">
            <span>AREAS OF INTEREST</span>

            <strong>03</strong>

            <small>
              Web · Mobile · Research
            </small>
          </div>
        </div>
      </div>
    </section>
  )
}