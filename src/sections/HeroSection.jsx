import {
  ArrowDown,
  ArrowUpRight,
  Play,
} from 'lucide-react'

import { profile } from '../data/portfolio'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="hero-section page-section"
    >
   

      <div className="hero-topline">
        <span className="availability">
          <span className="availability-pulse" />
          {profile.role}
        </span>

        <span className="hero-coordinate">
          UNIVERSITAS PAMULANG · SEMESTER {profile.semester}
        </span>
      </div>

      <div className="hero-copy">
        <p className="hero-kicker">
          STUDENT DEVELOPER / DIGITAL CREATOR
        </p>

        <h1>
          <span className="hero-script">
            {profile.firstName}
          </span>
          <span className="hero-period">.</span>
        </h1>

        <p className="hero-full-name">
          {profile.lastName}
        </p>

        <div className="hero-bottom-row">
          <p className="hero-intro">
            {profile.intro}
          </p>

          <div className="hero-actions">
            <a
              href="#projects"
              className="button button-primary"
            >
              Explore Projects
              <ArrowUpRight size={15} />
            </a>

            <a
              href="#about"
              className="button button-light"
            >
              About Me
              <Play size={13} />
            </a>
          </div>
        </div>
      </div>

      <div className="hero-image-card">
        <img
          src="/images/profile.png"
          alt="Nikita Aidina Hidayat"
          onError={(event) => {
            event.currentTarget.style.display = 'none'
          }}
        />

        <span className="image-card-caption">
          <span />
          A LITTLE ABOUT ME
        </span>
      </div>

      <a className="scroll-cue" href="#about">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={15} />
      </a>

      <div className="hero-watermark" aria-hidden="true">
        NIKITA
      </div>
    </section>
  )
}