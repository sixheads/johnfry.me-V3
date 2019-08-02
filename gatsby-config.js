module.exports = {
  siteMetadata: {
    title: `johnfry.me`,
    description: `My name is John Fry. I’m a freelance Melbourne-based frontend developer, specialising in custom WordPress builds. I also dabble in React.`,
    author: `John Fry`,
    siteEmail: "hello@johnfry.me",
    sitePhone: "+61 403 852 969",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `work-img`,
        path: `${__dirname}/src/images/work`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `work`,
        path: `${__dirname}/src/work`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Merriweather`,
            variants: [`300`],
          },
          {
            family: `Montserrat`,
            variants: [`400`, `600`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-125329892-1",
        head: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `johnfry.me`,
        short_name: `johnfry.me`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#5ce6cd`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
