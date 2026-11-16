
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

import BrandMark from './BrandMark'
import { navigation } from '../data/portfolio'

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavigate = (event, sectionId) => {
    event.preventDefault()

    const target = document.getElementById(sectionId)

    if (!target) return

    const isSlideMode = window.matchMedia(
      '(max-width: 1024px)'
    ).matches

    if (isSlideMode) {
      const slider = document.getElementById('section-slider')
      const panel = target.closest('.slide-panel')

      if (slider && panel) {
        const sliderRect = slider.getBoundingClientRect()
        const panelRect = panel.getBoundingClientRect()

        slider.scrollTo({
          left:
            slider.scrollLeft +
            panelRect.left -
            sliderRect.left,
          behavior: 'smooth',
        })
      }
    } else {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }

    setMenuOpen(false)
  }

  return (
    <header className="topbar">
      <div className="topbar-brand">
        <BrandMark />
      </div>

      <nav
        className={`topbar-links ${
          menuOpen ? 'is-open' : ''
        }`}
        aria-label="Main navigation"
      >
        {navigation.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(event) =>
              handleNavigate(event, item.id)
            }
          >
            {item.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
    </header>
  )
}
