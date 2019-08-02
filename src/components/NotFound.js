import React from "react"
import Link from "gatsby-link"

const NotFound = () => (
  <section id="about" className="about">
    <h2 className="title">Not Found</h2>
    <div className="wrapper--content">
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>
        <Link to="/">Maybe its time to go home.</Link>
      </p>
    </div>
  </section>
)

export default NotFound
