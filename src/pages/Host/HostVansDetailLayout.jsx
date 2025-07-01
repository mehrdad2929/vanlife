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
		<div>
			{/*
			*/}
			<p>welcome to your van list page</p>
			<Link
				to={'..'}
				relative="path"
			>
				<p>{"<-- back to parent page"}</p>
			</Link>
			<div>

				<h1>this is {vanData.name}</h1>
				<img src={vanData.imageUrl} alt={vanData.name} width={200} />
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
			<section>
				<Outlet context={{ vanData }} />
			</section>
		</div>
	)
}
export default HostVansDetailLayout;
