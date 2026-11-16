
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { navigation } from '../data/portfolio'

export default function SideNavigation({ activeSection }) {
  const [expanded, setExpanded] = useState(false)

  const currentItem =
    navigation.find((item) => item.id === activeSection) ||
    navigation[0]

  const otherItems = navigation.filter(
    (item) => item.id !== currentItem.id
  )

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId)

    if (!target) return

    const top =
      target.getBoundingClientRect().top +
      window.scrollY -
      20

    window.scrollTo({
      top,
      behavior: 'smooth',
    })

    window.history.replaceState(
      null,
      '',
      `#${sectionId}`
    )

    setExpanded(false)
  }

  return (
    <nav
      className={`navigation-dock ${
        expanded ? 'is-open' : ''
      }`}
      aria-label="Section navigation"
    >
      {/* CURRENT NUMBER */}
      <button
        type="button"
        className="navigation-current"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        aria-label="Open section navigation"
      >
        <span>{currentItem.number}</span>

        {expanded ? (
          <ChevronUp size={15} />
        ) : (
          <ChevronDown size={15} />
        )}
      </button>

      {/* EXPANDABLE NUMBERS */}
      <div
        className="navigation-options"
        aria-hidden={!expanded}
      >
        {otherItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className="navigation-option"
            tabIndex={expanded ? 0 : -1}
            onClick={() => scrollToSection(item.id)}
            title={item.label}
          >
            {item.number}
          </button>
        ))}
      </div>
    </nav>
  )
}
