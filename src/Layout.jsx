// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom'; // Used in React Router v6+
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetail from "./pages/VanDetail"
const Layout = () => {
	return (
		<div>
			<header>My App Header</header>
			<nav className=" navabar-layout">
				<Link to="/about">About</Link>
				<Link to="/vans">Vans</Link>
			</nav>
			<main>
				<Outlet /> {/* This is where child route content will be rendered */}
			</main>
			<footer>My App Footer</footer>
		</div>
	);
};

export default Layout;
