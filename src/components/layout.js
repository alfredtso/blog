import * as React from 'react'
import { Link } from 'gatsby'
import { container, navLinks, navLinkItem } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
	return (
		<div className={container}>
			<title>{pageTitle}</title>
			<nav>
				<ul className={navLinks}>
					<li><Link to="/" className={navLinkItem}>Home</Link></li>
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

