require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Hikes`,
    siteTitleAlt: `Kylie Stewart | Hikes`,
    author: `Kylie Stewart <kylie@kyliestewart.tech>`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emma`,
      options: {},
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kylie Stewart | Hikes`,
        short_name: `Hikes`,
        description: `A collection of hiking photos.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#b83280`,
        display: `standalone`,
        icons: [
          {
            src: `/favicon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
