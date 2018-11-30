import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
  <header className="header">
    <nav className="nav-main">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/projects/">Projects</Link>
        </li>

        <li>
          <a href="https://blog.alexdevero.com/">Blog</a>
        </li>

        <li>
          <Link to="/about/">About</Link>
        </li>

        <li style={{ display: 'none' }}>
          <Link to="/contact/">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
