module.exports = {
  siteMetadata: {
    title: 'Alex Devero',
    description: 'I am Alex Devero, founder/CEO of DEVERO Corporation. An entrepreneur, self-taught designer & developer from Czech Republic. My goal is to use technology to make an impact on the World and humankind, and change both in the process.',
    author: '@alexdevero'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'alex-devero',
        short_name: 'AD',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require('postcss-import')(),
          require('postcss-extend')(),
          require('postcss-nesting')(),
          require('postcss-responsive-type'),
          require('postcss-pxtorem')({
            mediaQuery: false,
            minPixelValue: 0,
            propWhiteList: [],
            replace: true,
            rootValue: 16,
            selectorBlackList: ['html'],
            unitPrecision: 5
          }),
          require('postcss-preset-env')({ stage: 3 }),
          require('cssnano')()
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'UA-40173486-1' // Google Analytics / GA
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
}
