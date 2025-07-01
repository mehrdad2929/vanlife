import { useOutletContext, Link } from "react-router-dom";
const HostVansPhotos = () => {
	const { vanData } = useOutletContext();
	return (
		<div>
			<img src={vanData.imageUrl} alt={vanData.name} />
		</div>
	)
}
export default HostVansPhotos;
