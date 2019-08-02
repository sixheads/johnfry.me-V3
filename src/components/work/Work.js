import React from "react"
import { StaticQuery, graphql } from "gatsby"
import WorkItem from "./WorkItem"

const Work = () => (
  <StaticQuery
    query={graphql`
      query WorkQuery {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              frontmatter {
                title
                date
                link
                design
                designLink
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 650) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <section id="work" className="work grid">
        <h2 className="title">Work</h2>
        <div className="work__grid">
          {data.allMarkdownRemark.edges.map(edge => (
            <WorkItem key={edge.node.id} work={edge} />
          ))}
        </div>
      </section>
    )}
  />
)

export default Work
