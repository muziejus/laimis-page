const languages = require("./src/data/languages");

module.exports = {
  siteMetadata: {
    title: `In Memory of Laimis`,
    description: `Remembering our beloved Laimis Jurgis Arcilio de Sá Pereira, 1984–2021`,
    author: `@muziejus`,
    languages,
    menuLinks: [
      {
        name: `menuTestimonials`,
        link: `/testimonials`,
      },
      {
        name: `menuArchive`,
        link: `/archive`,
      },
      {
        name: `menuJimmyFund`,
        link: `/jimmy-fund`,
      },
      {
        name: `menuCamNeelyFoundation`,
        link: `/cam-neely-foundation`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "PT Serif",
            weights: [400, 700],
          },
          {
            family: "Libre Baskerville",
            weights: [400, 700],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        useLangKeyLayout: true,
        // langKeyForNull: "en",
        prefixDefault: false,
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
