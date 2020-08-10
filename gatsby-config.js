module.exports = {
  siteMetadata: {
    title: `UofA Feminists`,
    description: `Feminists at University of Alberta are a student group focused on the critical radical deconstruction of social/political inequality in our communities.`,
    author: `@endsofinvention`,
    image: `/images/Favicon.png`,
    siteUrl: `https://pedantic-chandrasekhar-1a95bf.netlify.app/`,
    siteLanguage: 'en',
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `UofA Feminists Club`,
        short_name: `UofA Feminists`,
        start_url: `/`,
        background_color: `#FCE3D8`,
        theme_color: `#FCE3D8`,
        display: `minimal-ui`,
        icon: `src/images/university-of-alberta-feminists-club-logo.jpg`, // This path is relative to the root of the site.
      },
    }, // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto Sans`,
          `IBM Plex Mono`
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt'
    ],
}
