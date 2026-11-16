
import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(
    sectionIds[0] || 'home'
  )

  useEffect(() => {
    let animationFrame = null

    const updateActiveSection = () => {
      const activationPoint = window.innerHeight * 0.35

      let currentSection = sectionIds[0] || 'home'

      for (const id of sectionIds) {
        const section = document.getElementById(id)

        if (!section) continue

        const position = section.getBoundingClientRect()

        if (position.top <= activationPoint) {
          currentSection = id
        } else {
          break
        }
      }

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5

      if (isAtBottom) {
        currentSection = sectionIds[sectionIds.length - 1]
      }

      setActiveSection(currentSection)
    }

    const handleScroll = () => {
      if (animationFrame !== null) return

      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = null
        updateActiveSection()
      })
    }

    updateActiveSection()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateActiveSection)

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame)
      }
    }
  }, [sectionIds])

  return activeSection
}
