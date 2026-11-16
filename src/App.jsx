
import { useMemo } from 'react'

import Topbar from './components/Topbar'
import SideNavigation from './components/SideNavigation'

import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import ProjectsSection from './sections/ProjectsSection'
import ArticlesSection from './sections/ArticlesSection'
import Footer from './sections/Footer'

import { navigation } from './data/portfolio'

import { useActiveSection } from './hooks/useActiveSection'
import { useReveal } from './hooks/useReveal'

export default function App() {
  const sectionIds = useMemo(
    () => navigation.map((item) => item.id),
    []
  )

  const activeSection = useActiveSection(sectionIds)

  useReveal()

  return (
    <div className="app-shell">

      <SideNavigation
        activeSection={activeSection}
      />

      <main className="portfolio-frame">

        <div className="portfolio-content">

          <Topbar />

          <div
            className="section-slider"
            id="section-slider"
          >

            <div
              className="slide-panel"
              data-section-id="home"
            >
              <HeroSection />
            </div>

            <div
              className="slide-panel"
              data-section-id="about"
            >
              <AboutSection />
            </div>

            <div
              className="slide-panel"
              data-section-id="skills"
            >
              <SkillsSection />
            </div>

            <div
              className="slide-panel"
              data-section-id="projects"
            >
              <ProjectsSection />
            </div>

            <div
              className="slide-panel"
              data-section-id="writing"
            >
              <ArticlesSection />
              <Footer />
            </div>

          </div>

        </div>

      </main>

    </div>
  )
}
