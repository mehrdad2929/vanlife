import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Vans() {
	const [vanObjects, setVanObjects] = useState([]);
	const [error, setError] = useState('');
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('/api/vans');
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data = await response.json();
				console.log("this is data.vans");
				console.log(data.vans);
				setVanObjects(data.vans)
			} catch (error) {
				setError(error);
			} finally {

			}
		};
		fetchData();
	}, []);
	return (
		<>
			{error ? (
				<p>there was an error in the vans.jsx !</p>
			) : (
				<>
					<h1>Vans page goes here 🚐</h1>
					<ul>
						{vanObjects.map(van =>
							<li key={van.id}>
								<Link to={`/vans/${van.id}`}>
									<h1>this is {van.name}</h1>
									<img src={van.imageUrl} alt={van.name} width={200} />
									<p>price:${van.price}/day</p>
								</Link>
							</li>
						)}
					</ul>
				</>
			)
			}
		</>
	);
}
