import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
  const [isMobileMenuVisible, toggleMobileMenu] = React.useState(false)

  const generateNavClass = () => {
    const windowGlobal = typeof window !== 'undefined' && window

    if (windowGlobal.innerWidth <= 767.99 && isMobileMenuVisible) {
      return 'nav-main--visible'
    } else if (windowGlobal.innerWidth <= 767.99 && !isMobileMenuVisible) {
      return 'nav-main--hidden'
    } else {
      return null
    }
  }

  return <header className="header">
    <nav className="nav-main">
      <ul className={generateNavClass()}>
        <li>
          <button className="nav__toggler nav__toggler--close" onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>
            <span></span>
            <span></span>
          </button>
        </li>

        <li>
          <Link to="/" onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>Home</Link>
        </li>

        <li>
          <Link to="/projects/" onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>Projects</Link>
        </li>

        <li>
          <Link to="/about/" onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>About</Link>
        </li>

        <li>
          <a href="https://blog.alexdevero.com/" rel="noopener noreferrer" target="_blank" onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>Blog</a>
        </li>

        <li>
          <a href="https://devero.io/" rel="noopener noreferrer" target="_blank" onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>Devero</a>
        </li>

        <li>
          <a href="https://studio.devero.io/" rel="noopener noreferrer" target="_blank" onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>Studio</a>
        </li>

        <li>
          <Link to="/contact/" onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>Contact</Link>
        </li>
      </ul>

      <button className="nav__toggler nav__toggler--toggle" onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  </header>
}

export default Header
