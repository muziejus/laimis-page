const languages = require("./src/data/languages");

module.exports = {
  siteMetadata: {
    siteUrl: `https://laimis.desapereira.com`,
    title: `In Memory of Laimis`,
    description: `Remembering our beloved Laimis Jurgis Arcilio de Sá Pereira, 1984–2021`,
    author: `@muziejus`,
    languages,
    pictures: [
      {
        path: `/`,
        picture: `laimis-uhaul.jpg`,
        alt: `Laimis smiling broadly.`,
        captionKey: `laimisUHaulCaption`,
      },
      {
        path: `/memorial`,
        picture: `laimis-fort-taber.jpg`,
        alt: `Laimis at Fort Taber in 2020.`,
        captionKey: `laimisFortTaberCaption`,
      },
      {
        path: `/testimonials`,
        picture: `laimis-thinking.jpg`,
        alt: `Laimis in thought.`,
        captionKey: `laimisThoughtCaption`,
      },
    ],
    menuLinks: [
      {
        name: `menuTestimonials`,
        link: `/testimonials`,
      },
      {
        name: `menuMemorial`,
        link: `/memorial`,
      },
      // {
      //   name: `menuArchive`,
      //   link: `/archive`,
      // },
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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.svg/,
        }
      }
    },
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
        name: `text`,
        path: `${__dirname}/src/text`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `testimonials`,
        path: `${__dirname}/src/testimonials`,
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
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve(`./src/components/layout.js`),
        },
      },
    },
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `en`,
        configPath: require.resolve(`./i18n/config.json`),
      },
    },
    {
      resolve: `gatsby-theme-i18n-lingui`,
      options: {
        localeDir: `./i18n/lingui`,
      },
    },
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
