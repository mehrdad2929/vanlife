import React from 'react';
import { Outlet } from 'react-router-dom'; // Used in React Router v6+
import Header from './Header';
import Footer from './Footer';
const Layout = () => {
	return (
		<div>
			<Header />
			<main>
				<Outlet />
			</main>

			<Footer />
		</div>
	);
};

export default Layout;
