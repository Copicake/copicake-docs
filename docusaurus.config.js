// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Copicake",
  tagline: "ONE CLICK to generate your image on the fly",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.copicake.com/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Copicake", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: "/",
          editUrl: "https://github.com/Copicake/docs/tree/master/",
        },
        theme: {
          // customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/social-card.png",
      navbar: {
        title: "Copicake",
        logo: {
          alt: "Copicake Logo",
          src: "img/logo.png",
        },
        items: [
          {
            href: "https://github.com/copicake",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "API",
                to: "/category/api",
              },
              {
                label: "Libraries",
                to: "/category/libraries",
              },
              {
                label: "Errors",
                to: "/errors",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Copicake",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/copicakeapp",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Main Site",
                href: "https://copicake.com",
              },
              {
                label: "Our Blog",
                href: "https://blog.copicake.com",
              },
              {
                label: "Contact Us",
                href: "https://copicake.com/contact",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
