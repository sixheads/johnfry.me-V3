import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SiteIntro from "../components/SiteIntro"
import Work from "../components/work/Work"

const IndexPage = () => (
  <Layout>
    <SEO title="Work" />
    <SiteIntro
      intro="Yeah G'day! My name is John Fry. I’m a freelance Melbourne-based frontend developer, specialising in custom WordPress builds. I also dabble in React."
      cta="Get in contact to discuss your project."
    />
    <main className="site-main">
      <Work />
    </main>
  </Layout>
)

export default IndexPage
