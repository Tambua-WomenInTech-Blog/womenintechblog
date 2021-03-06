module.exports = {
  siteMetadata: {
    title: `Women In Tech Blog`,
    name: `Women in Tech Blog`,
    siteUrl: `https://novela.narative.co`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `WomenInTech Blog`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/W_TechShoutOuts`,
      },
      {
        name: `github`,
        url: `https://github.com/Tambua-WomenInTech-Blog`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/w_techshoutouts`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/women-in-tech-shoutouts`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Women In Tech Blog`,
        short_name: `Women In Tech ShoutOuts`,
        start_url: `/`,
        background_color: `"#ECE0E8"`,
        theme_color: `#ECE0E8`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
  pathPrefix: "/womenintechblog",
};
