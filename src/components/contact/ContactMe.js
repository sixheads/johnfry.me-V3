import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ContactMe = () => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      site {
        siteMetadata {
          siteEmail
          sitePhone
        }
      }
    }
  `)

  const { siteEmail, sitePhone } = data.site.siteMetadata

  return (
    <section id="contact" className="contact">
      <h2 className="title">Contact</h2>
      <div className="wrapper--content">
        <p className="contact__phone">
          P:{" "}
          <a className="link--alt" href={`tel:${sitePhone}`}>
            {sitePhone}
          </a>
        </p>
        <p className="contact__email">
          E:{" "}
          <a className="link--alt" href={`mailto:${siteEmail}`}>
            {siteEmail}
          </a>
        </p>
      </div>
    </section>
  )
}

export default ContactMe
