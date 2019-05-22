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
          <Link to="/about/">About</Link>
        </li>

        <li>
          <a href="https://blog.alexdevero.com/" rel="noopener noreferrer" target="_blank">Blog</a>
        </li>

        <li>
          <a href="https://devero.io/" rel="noopener noreferrer" target="_blank">Devero</a>
        </li>

        <li>
          <a href="https://studio.devero.io/" rel="noopener noreferrer" target="_blank">Studio</a>
        </li>

        <li>
          <Link to="/contact/">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
