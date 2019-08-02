import React from "react"
import Img from "gatsby-image"

const WorkItem = ({ work }) => (
  <article className="work__item">
    <a
      href={work.node.frontmatter.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Img
        sizes={work.node.frontmatter.featuredImage.childImageSharp.fluid}
        alt={work.node.frontmatter.title}
        className="work__img"
      />
    </a>
    <h3 className="work__title">{work.node.frontmatter.title}</h3>
    <p className="work__designer">
      <a
        href={work.node.frontmatter.designLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Designed by </span>
        {work.node.frontmatter.design}
      </a>
    </p>
  </article>
)

export default WorkItem
