module.exports = {
  client: {
    service: {
      name: "frabric-app",
      // URL to the GraphQL API
      url: "https://api.thegraph.com/subgraphs/name/0xnshuman/frabric-goerli",
    },
    // Files processed by the extension
    includes: [
      "src/**/*.vue",
      "src/**/*.js",
    ],
  },
}