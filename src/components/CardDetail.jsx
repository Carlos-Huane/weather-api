import { useParams } from "react-router-dom";
import Style from "../Styles/CardDetail.module.css";
const CardDetail = (props) => {
    const params = useParams();
    const obj = props.country.find(e => e.name===params.country);
    console.log("el filtrado es:",obj);
    return (
        <div className= {Style.detail}>
            <h2>SPECIFIC DETAILS</h2>
            <p>Name: {obj.name}</p>
            <p>Temperature: {obj.temp} ºC</p>
            <p>Climate: {obj.weather}</p>
            <p>Wind: {obj.wind} km/h</p>
            <p>Clouds: {obj.clouds}</p>
            <p>Latitude: {obj.latitud}º</p>
            <p>Longitude: {obj.longitud}º</p>
        </div>
    )
}
export default CardDetail;