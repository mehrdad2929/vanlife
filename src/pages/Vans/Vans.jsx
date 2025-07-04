import React from "react"
import { Link } from "react-router-dom"
import styles from './Vans.module.css'

export default function Vans() {
	const [vans, setVans] = React.useState([])

	React.useEffect(() => {
		fetch("/api/vans")
			.then(res => res.json())
			.then(data => setVans(data.vans))
	}, [])

	const vansEls = vans.map(van => (
		<Link
			to={`/vans/${van.id}`}
			key={van.id}
			className={styles.vanCard}
		>
			<img
				src={van.imageUrl}
				alt={`Photo of ${van.name}`}
				className={styles.vanImage}
			/>
			<div className={styles.vanInfo}>
				<h3>{van.name}</h3>
				<p>${van.price}/day</p>
				{/* Add van type badge if you have it */}
				{van.type && <span className={`${styles.vanType} ${styles[van.type]}`}>{van.type}</span>}
			</div>
		</Link>
	))

	return (
		<section className={styles.vansSection}>
			<h1 className={styles.vansTitle}>Explore our van options</h1>

			{/* Add filter buttons if needed */}
			<div className={styles.filtersContainer}>
				<button className={styles.filterButton}>Simple</button>
				<button className={styles.filterButton}>Luxury</button>
				<button className={styles.filterButton}>Rugged</button>
				<button className={styles.clearFilters}>Clear filters</button>
			</div>

			<div className={styles.vansContainer}>
				{
					vans.length > 0 ? (
						<div className={styles.vansGrid}>
							{vansEls}
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
