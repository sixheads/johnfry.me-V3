import React from "react"

const jobs = [
  {
    exDate: "2010 – Current",
    exTitle: "Sixheads - Developer & Partner",
  },
  {
    exDate: "2012 – 2017",
    exTitle: "Shillington - Director of Digital",
  },
  {
    exDate: "2012 – 2015",
    exTitle: "Shillington - Web Course Director",
  },
  {
    exDate: "2009 – 2011",
    exTitle: "Shillington - Director Manchester",
  },
  {
    exDate: "2008",
    exTitle: "Shillington - Director Melbourne",
  },
  {
    exDate: "2006 – 2007",
    exTitle: "Shillington - Director Brisbane & Course Director",
  },
  {
    exDate: "2000 – 2005",
    exTitle: "Shillington - Teacher",
  },
  {
    exDate: "2000 – 2007",
    exTitle: "Freelance Graphic Designer",
  },
]

const Experience = () => (
  <section id="experience" className="experience">
    <h2 className="title">Experience</h2>
    <div className="wrapper--content">
      {jobs.map(job => (
        <article className="experience__item" key={job.exDate}>
          <p className="experience__dates">{job.exDate}</p>
          <h3 className="experience__title">{job.exTitle}</h3>
        </article>
      ))}
    </div>
  </section>
)

export default Experience
