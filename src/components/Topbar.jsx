
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

import BrandMark from './BrandMark'
import { navigation } from '../data/portfolio'

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false)

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
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
    </header>
  )
}
