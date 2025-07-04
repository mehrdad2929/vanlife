import React from 'react';
import { Outlet } from 'react-router-dom'; // Used in React Router v6+
import Header from './Header';
import Footer from './Footer';
import style from './Layout.module.css'
const Layout = () => {
	return (
		<div className={style.layout}>
			<Header />
			<main>
				<Outlet />
			</main>

			<Footer />
		</div>
	);
};

export default Layout;
