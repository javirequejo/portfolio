require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Javi Requejo - Full Stack Developer',
    description: 'Full stack developer living in UK and working with Javascript, React, Node and PHP.',
    author: 'Javi Requejo',
    url: 'https://javirequejo.com/',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Javi Requejo - Full Stack Developer',
        short_name: 'Javi Requejo',
        start_url: '/',
        background_color: '#141e30',
        theme_color: '#f8c630',
        display: 'standalone',
        lang: 'en',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
        icons: [
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/favicons/apple-touch-icon.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-transformer-remark',
  ],
};
