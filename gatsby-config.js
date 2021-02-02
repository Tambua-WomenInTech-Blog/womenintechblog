module.exports = {
  siteMetadata: {
    title: `Women In Tech Blog`,
    name: `Women in Tech Blog`,
    siteUrl: `https://novela.narative.co`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Welcome to WomenInTech Blog, our aim is to learn, develop and share knowledge with one another.`,
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
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
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
