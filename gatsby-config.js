module.exports = {
  siteMetadata: {
    title: ``,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Website",
        fieldName: "Website",
        url: "https://api-ap-south-1.graphcms.com/v2/cl182adohjd7p01z06raj0chq/master",
      },
    },
  ],
};
