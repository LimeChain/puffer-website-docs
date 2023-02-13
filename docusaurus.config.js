/** @type {import('@docusaurus/types').DocusaurusConfig} */

const math = require("remark-math");
const katex = require("rehype-katex");

module.exports = {
  title: "Puffer Docs",
  tagline: "Documentation for the Puffer Protocol",
  url: "https://pufferFinance.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "pufferfinance",
  projectName: "doctest",
  themeConfig: {
    prism: {
      additionalLanguages: ["solidity"],
    },
    navbar: {
      title: "Puffer Docs",
      logo: {
        alt: "Puffer Logo",
        src: "img/Logo Mark.svg",
      },
      items: [
        {
          href: "https://github.com/PufferFinance",
          label: "GitHub",
          position: "right",
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/PufferFinance/doc-test",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local", "@rehype-katex"),
      { indexBlog: false, docsRouteBasePath: "/", indexPages: true },
    ],
  ],
};