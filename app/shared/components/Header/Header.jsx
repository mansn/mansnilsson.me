import React, { useState, useRef } from 'react'
import { useOnClickOutside } from '../../../hooks'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setMenuOpen(false))

  return (
    <header className="flex items-center">
      <nav>
        <div>
          <a href="/digital-garden">Digital Garden</a>
          <a href="/">About</a>
        </div>
      </nav>
    </header>
  )
}

export default Header
