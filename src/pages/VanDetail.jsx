import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const VanDetail = () => {
    const params = useParams();
    const [vanData, setVanData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/vans/${params.id}`);
            const data = await response.json();
            console.log(`this is vand data ${data}`)
            setVanData(data.van)
        }
        fetchData();
    }, []);
    return (
        <div>
            <h1>this is {vanData.name} .</h1>
            <img src={vanData.imageUrl} alt={vanData.name} width={200} />
            <i>price : ${vanData.price}/day</i>
            <p>description:{vanData.description}</p>
        </div>
    )
}
export default VanDetail;
