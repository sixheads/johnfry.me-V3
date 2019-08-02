import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <div className="site-branding">
    <Link to="/">
      <h1>
        johnfry<span className="site-branding--dot">.</span>
        <span className="site-branding--me">me</span>
      </h1>
    </Link>
  </div>
)

export default Header
