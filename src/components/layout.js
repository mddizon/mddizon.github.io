import React from "react";
import Header from './header';
import Footer from './footer';

const Layout = (props) => {
	return (
		<div className="ml-56 mr-56">
			<Header/>
			{props.children}
			<Footer/>
		</div>
	)
};

export default Layout;
