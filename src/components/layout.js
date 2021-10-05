import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { container, navLinks, navLinkItem, siteTitle, } from './layout.module.css'
import { Header } from './header'

const Layout = ({ pageTitle, children }) => {
	const data = useStaticQuery(graphql`
					query {
						site {
							siteMetadata {
								title
							}
						}
					}
					`)
	return (
		<div className={container}>
			<title>{pageTitle} | {data.site.siteMetadata.title} </title>
			<header className={siteTitle}>{data.site.siteMetadata.title}</header>
			<nav>
				<ul className={navLinks}>
					<li><Link to="/" className={navLinkItem}>Home</Link></li>
					<li><Link to="/blog" className={navLinkItem}>Blog</Link></li>
					<li><Link to="/about" className={navLinkItem}>About</Link></li>
					<li><Link to="/projects" className={navLinkItem}>Projects</Link></li>
					<li><Link to="/contributions" className={navLinkItem}>Contributions</Link></li>
				</ul>
			</nav>
			<main>
				<h1>{pageTitle}</h1>
				{children}
			</main>
		</div>
	)
}

export default Layout

