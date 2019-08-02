import React from "react"
import { Link } from "gatsby"

const Nav = () => (
  <nav className="site-nav" role="navigation">
    <ul>
      <li>
        <Link to="/" activeClassName="active">Work</Link>
      </li>
      <li>
        <Link to="/about/" activeClassName="active">About</Link>
      </li>
      <li>
        <Link to="/contact/" activeClassName="active">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Nav
