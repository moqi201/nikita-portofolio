
import { navigation } from '../data/portfolio'

export default function SideNavigation({ activeSection }) {

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId)

    if (!target) return

    const isSlideMode = window.matchMedia(
      '(max-width: 1024px)'
    ).matches

    if (isSlideMode) {
      const slider = document.getElementById('section-slider')
      const panel = target.closest('.slide-panel')

      if (!slider || !panel) return

      const sliderRect = slider.getBoundingClientRect()
      const panelRect = panel.getBoundingClientRect()

      const nextPosition =
        slider.scrollLeft +
        panelRect.left -
        sliderRect.left

      slider.scrollTo({
        left: nextPosition,
        behavior: 'smooth',
      })

      return
    }

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <nav
      className="side-navigation"
      aria-label="Section navigation"
    >
      {navigation.map((item) => {
        const isActive = activeSection === item.id

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollToSection(item.id)}
            className={`side-nav-item ${
              isActive ? 'active' : ''
            }`}
            aria-label={`Go to ${item.label}`}
            aria-current={
              isActive ? 'location' : undefined
            }
          >
            <span>{item.number}</span>
            <small>{item.label}</small>
          </button>
        )
      })}
    </nav>
  )
}
