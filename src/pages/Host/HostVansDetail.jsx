import { useOutletContext } from "react-router-dom";
const HostVansDetail = () => {
	const { vanData } = useOutletContext();
	return (
		<div>
			<p>description: {vanData.description}</p>
		</div>
	)
}
export default HostVansDetail;
