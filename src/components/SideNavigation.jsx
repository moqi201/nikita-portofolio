
import { navigation } from '../data/portfolio'

export default function SideNavigation({ activeSection }) {
  const handleNavigation = (event, sectionId) => {
    event.preventDefault()

    const target = document.getElementById(sectionId)

    if (!target) {
      console.warn(`Section #${sectionId} tidak ditemukan`)
      return
    }

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

    window.history.replaceState(
      null,
      '',
      `#${sectionId}`
    )
  }

  return (
    <nav
      className="side-navigation"
      aria-label="Section navigation"
    >
      {navigation.map((item) => {
        const isActive = activeSection === item.id

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(event) =>
              handleNavigation(event, item.id)
            }
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
          </a>
        )
      })}
    </nav>
  )
}
