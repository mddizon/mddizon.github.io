import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
	return (
		<header>
			<h1 className="text-6xl text-center">Mark Dizon</h1>
			<nav>
				<ul className="flex justify-center">
					<li className="mr-6">
						<Link className="text-blue-500 hover:text-blue-800" to="/">Home</Link>
					</li>
					<li className="mr-6">
						<Link className="text-blue-500 hover:text-blue-800" to="/about">About</Link>
					</li>
					<li className="mr-6">
						<Link className="text-blue-500 hover:text-blue-800" to="/blog">Blog</Link>
					</li>
					<li className="mr-6">
						<Link className="text-blue-500 hover:text-blue-800" to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header;
