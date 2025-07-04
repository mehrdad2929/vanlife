import { Link, NavLink } from "react-router-dom"
import React from "react"
import styles from "./Header.module.css"
const Header = () => {
	return (
		<div className={styles.header}>
			<Link className={styles.sitelogo} to="/">#VanLife</Link>
			<nav className={styles.navbar}>
				<NavLink
					className={({ isActive }) =>
						`${styles.navlink} ${isActive ? styles.active : ''}`
					}
					to="/"
				>
					Home
				</NavLink>
				<NavLink

					className={({ isActive }) =>
						`${styles.navlink} ${isActive ? styles.active : ''}`
					}
					to="/host"
				>
					Host
				</NavLink>
				<NavLink

					className={({ isActive }) =>
						`${styles.navlink} ${isActive ? styles.active : ''}`
					}
					to="/vans"
				>
					Vans
				</NavLink>

				<NavLink

					className={({ isActive }) =>
						`${styles.navlink} ${isActive ? styles.active : ''}`
					}
					to="/about"
				>
					About
				</NavLink>
			</nav>
		</div>
	)
}
export default Header;
