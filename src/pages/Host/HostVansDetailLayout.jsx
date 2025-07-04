import { useEffect, useState } from "react";
import { useParams, Outlet, Link, NavLink } from "react-router-dom";
import styles from './HostVansDetailLayout.module.css';
const HostVansDetailLayout = () => {
	const params = useParams();
	const [vanData, setVanData] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`/api/host/vans/${params.id}`);
			const data = await response.json();
			console.log(data)
			setVanData(data.van)
		}
		fetchData();
	}, [params.id]);

	return (
		<div className={styles.container}>
			<Link
				to={'..'}
				relative="path"
				className={styles.backLink}
			>
				<p>{"<-- back to parent page"}</p>
			</Link>

			<div className={styles.layout}>
				<div className={styles.sidebar}>
					<div className={styles.vanInfo}>
						<h1>{vanData.name}</h1>
						<img src={vanData.imageUrl} alt={vanData.name} />
						<p>${vanData.price}/day</p>
					</div>

					<nav className={styles.navbar}>
						<NavLink
							to='.'
							className={({ isActive }) =>
								`${styles.navlink} ${isActive ? styles.active : ''}`
							}
							end
						>
							info
						</NavLink>
						<NavLink
							to='pricing'
							className={({ isActive }) =>
								`${styles.navlink} ${isActive ? styles.active : ''}`
							}
						>
							pricing
						</NavLink>
						<NavLink
							to='photos'
							className={({ isActive }) =>
								`${styles.navlink} ${isActive ? styles.active : ''}`
							}
						>
							photos
						</NavLink>
					</nav>
				</div>

				<section className={styles.content}>
					<Outlet context={{ vanData }} />
				</section>
			</div>
		</div>
	)
}
export default HostVansDetailLayout;
