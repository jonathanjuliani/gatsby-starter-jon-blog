import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const config = {
  siteMetadata: {
    title: `Jon Blog Starter`,
    siteUrl: `https://www.yourdomain.tld`,
    name: `Jon Blog Starter`,
    short_name: `Jon Blog Starter`,
    description: `Jon Blog Starter - Gatsby Starter`,
    lang: `pt-BR`,
    author: {
      name: `Jon`,
      summary: `Jon Blog Starter - Gatsby Starter`,
    },
    social: {
      twitter: `jonathanjuliani`,
      linkedin: `jonathanjuliani`,
      github: `jonathanjuliani`,
    },
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss", // this plugin allows you to use PostCSS in your project
    "gatsby-plugin-image", // this plugin allows you to use images in your project
    "gatsby-plugin-sitemap", // this plugin allows you to generate a sitemap for your website
    "gatsby-plugin-sharp", // this plugin allows you to use images in your project
    "gatsby-transformer-sharp", // this plugin allows you to use images in your project
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog-content`,
      },
      __key: "blog",
    },
    // {
    //   resolve: "gatsby-plugin-google-tagmanager", // this plugin allows you to use Google Tag Manager to track your website
    //   options: {
    //     id: "GXX-XXXXXXXX",
    //     includeInDevelopment: false,
    //     defaultDataLayer: { platform: "gatsby" },
    //   },
    // },
  ],
};

export default config;
