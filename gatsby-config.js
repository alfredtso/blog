module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Alfred Tso",
  },
  plugins: [
	  "gatsby-plugin-mdx",
	  {
		  resolve: "gatsby-source-filesystem",
		  options: {
			  name: `blog`,
			  path: `${__dirname}/blog`,
		  }
	  },
  ],
};
