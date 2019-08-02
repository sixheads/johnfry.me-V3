import React from "react"
import Link from "gatsby-link"

const SiteIntro = ({ intro, cta }) => (
  <div className="site__intro">
    <p>{intro}</p>
    <p className="site__intro-cta">
      <Link to="/contact/">{cta}</Link>
    </p>
  </div>
)

export default SiteIntro
