import React from "react"
import { Link } from "react-router-dom"
import styles from './HostVans.module.css'

export default function HostVans() {
	const [vans, setVans] = React.useState([])

	React.useEffect(() => {
		fetch("/api/host/vans")
			.then(res => res.json())
			.then(data => setVans(data.vans))
	}, [])

	const hostVansEls = vans.map(van => (
		<Link
			to={`/host/vans/${van.id}`}
			key={van.id}
			className={styles.hostVanCard}
		>
			<img
				src={van.imageUrl}
				alt={`Photo of ${van.name}`}
				className={styles.hostVanImage}
			/>
			<div className={styles.hostVanInfo}>
				<h3>{van.name}</h3>
				<p>${van.price}/day</p>
			</div>
		</Link>
	))

	return (
		<section>
			<h1 className={styles.hostVansTitle}>Your listed vans</h1>
			<div className={styles.hostVansContainer}>
				{
					vans.length > 0 ? (
						<div className={styles.hostVansGrid}>
							{hostVansEls}
						</div>
					) : (
						<h2 className={styles.loading}>Loading...</h2>
					)
				}
			</div>
			<Link
				to={'.'}
				relative="path"
				className={styles.toTopLink}
				onClick={(e) => {
					e.preventDefault();
					window.scrollTo({ top: 0, behavior: "smooth" })
				}}
			>
				<p>^ Back to top ^</p>
			</Link>
		</section>
	)
}

