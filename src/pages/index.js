import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = ({data}) => {
	return (
		<Layout pageTitle="Blog Posts">
			{
				data.allMdx.nodes.map(node => (
					// React use id to determine re-render
					<article key={node.id}>
						<h2>{node.frontmatter.title}</h2>
						<p>{node.frontmatter.date}</p>
					</article>
				))
			}
		</Layout>
	)
}

export const query = graphql`
	query {
		allMdx(sort: {fields:frontmatter___date, order: DESC}) {
			nodes {
				frontmatter {
					date(formatString: "MMMM D, YYYY")
					title
				}
				id
			}
		}
	}
`

export default IndexPage

