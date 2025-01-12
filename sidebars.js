/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually

  docSidebar: [
    "intro",
    {
      type: "category",
      label: "Protocol",
      items: [
        "overview",
        "guiding-principles",
        "nlrt",
        "modules",
        "validator-tickets",
        "rewards",
        "guardians",
        "burst-threshold",
      ],
    },
    {
      type: "category",
      label: "Technology",
      items: ["secure-signer", "rave"],
    },
    {
      type: "category",
      label: "Node Operators",
      items: ["requirements", "setup", "registration", "noop-rewards"],
    },
    {
      type: "category",
      label: "Deployments",
      items: ["deployed-contracts", "multisig"],
    },
    {
      type: "category",
      label: "UniFi Based Rollup",
      items: ["unifi-rollup-intro", "unifi-rollup-move-funds", "unifi-rollup-bridge-ui"],
    },
    {
      type: "category",
      label: "UniFi AVS",
      items: ["unifi-avs-intro", "unifi-avs-background", "unifi-avs-protocol", "unifi-avs-getting-started"],
    },
    {
      type: "category",
      label: "Governance",
      items: ["governance-mission", "governance-token", "governance-roadmap", "governance-voting"]
    },
    {
      type: "category",
      label: "Reference",
      items: ["glossary", "hardforks", "slash", "faq", "cookie-policy", "privacy-policy", "terms-of-service"]
    }
  ],
  developersSidebar: [
    {
      type: "doc",
      label: "Getting started",
      id: "developers/getting-started/index",
    },
    {
      type: "category",
      label: "UniFi Based Rollup",
      link: {
        type: "generated-index",
      },
      items:[
        {
          type: "category",
          label: "Deploy a Smart Contract",
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "doc", 
              label: "Using Foundry",
              id: "developers/rollup/smart-contracts/unifi-rollup-smart-contracts-foundry",
            },
            {
              type: "doc", 
              label: "Using Hardhat",
              id: "developers/rollup/smart-contracts/unifi-rollup-smart-contracts-hardhat",
            }
          ]
        },
        {
          type: "category",
          label: "Reference",
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "doc",
              label: "Network & RPC Endpoints",
              id: "developers/reference/rpc-endpoints",
            },
            {
              type: "doc",
              label: "Smart Contract Addresses",
              id: "developers/reference/contract-addresses",
            },
            {
              type: "doc",
              label: "Opcodes",
              id: "developers/reference/opcodes",
            },
          ]
        }
      ]
    }
  ]
};

module.exports = sidebars;
