import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SiteIntro from "../components/SiteIntro"
import NotFound from "../components/NotFound"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <SiteIntro intro="404 Not Found..." cta={null} />
    <main className="site-main">
      <NotFound />
    </main>
  </Layout>
)

export default NotFoundPage
