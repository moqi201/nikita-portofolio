
import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(
    sectionIds[0] || 'home'
  )

  useEffect(() => {
    const slider = document.getElementById('section-slider')

    const mediaQuery = window.matchMedia(
      '(max-width: 1024px)'
    )

    let animationFrame = null

    const updateMobile = () => {
      if (!slider) return

      const panels = Array.from(
        slider.querySelectorAll('.slide-panel')
      )

      if (!panels.length) return

      const sliderCenter =
        slider.getBoundingClientRect().left +
        slider.clientWidth / 2

      let closestPanel = panels[0]
      let smallestDistance = Infinity

      panels.forEach((panel) => {
        const rect = panel.getBoundingClientRect()

        const panelCenter =
          rect.left + rect.width / 2

        const distance = Math.abs(
          sliderCenter - panelCenter
        )

        if (distance < smallestDistance) {
          smallestDistance = distance
          closestPanel = panel
        }
      })

      const id = closestPanel.dataset.sectionId

      if (id) {
        setActiveSection(id)
      }
    }

    const updateDesktop = () => {
      const activationPoint = window.innerHeight * 0.35

      let currentSection = sectionIds[0] || 'home'

      sectionIds.forEach((id) => {
        const section = document.getElementById(id)

        if (!section) return

        const position = section.getBoundingClientRect()

        if (position.top <= activationPoint) {
          currentSection = id
        }
      })

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5

      if (isAtBottom) {
        currentSection = sectionIds[sectionIds.length - 1]
      }

      setActiveSection(currentSection)
    }

    const update = () => {
      if (mediaQuery.matches) {
        updateMobile()
      } else {
        updateDesktop()
      }
    }

    const handleScroll = () => {
      if (animationFrame !== null) return

      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = null
        update()
      })
    }

    if (slider) {
      slider.addEventListener('scroll', handleScroll, {
        passive: true,
      })
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    window.addEventListener('resize', handleScroll)

    mediaQuery.addEventListener('change', handleScroll)

    update()

    return () => {
      slider?.removeEventListener('scroll', handleScroll)

      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)

      mediaQuery.removeEventListener('change', handleScroll)

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame)
      }
    }
  }, [sectionIds])

  return activeSection
}
