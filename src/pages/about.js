import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SiteIntro from "../components/SiteIntro"
import AboutMe from "../components/about/AboutMe"
import Skills from "../components/about/Skills"
import ExperienceShort from "../components/about/ExperienceShort"
import Education from "../components/about/Education"

const About = () => (
  <Layout>
    <SEO title="About" />
    <SiteIntro
      intro="I work directly with designers and agencies who are looking for a development partner to work on creative projects."
      cta="Let's collaborate together!"
    />
    <main className="site-main">
      <AboutMe />
      <Skills />
      <ExperienceShort />
      <Education />
    </main>
  </Layout>
)

export default About
