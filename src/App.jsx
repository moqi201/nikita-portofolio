
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

          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />

          <ArticlesSection />
          <Footer />
        </div>

      </main>

    </div>
  )
}
