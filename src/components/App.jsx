import React, {useState} from "react";
import Heading from "./Heading.jsx";
import Cards from "./Cards.jsx";
import Nav from "./Nav.jsx";
import data from "../data.js";
import Style from "../Styles/Body.module.css";

function App(){
    const [cities,setCities]=useState(data);
    const apiKey='e9c40b529134bb94cd5ee7ef442c741a';
     function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(responsive => responsive.json())
      .then((json) => {
        if(json.main !== undefined){
          const ciudad = {
            min: Math.round(json.main.temp_min),
            max: Math.round(json.main.temp_max),
            img: json.weather[0].icon,
            id: json.id,
            wind: json.wind.speed,
            temp: json.main.temp,
            name: json.name,
            weather: json.weather[0].main,
            clouds: json.clouds.all,
            latitud: json.coord.lat,
            longitud: json.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
    }
    function onClose(id) {
        console.log("ctmr");
        setCities(prevCities => prevCities.filter(c => c.id !== id));
       
      }
    return(

        <div className={Style.body}>
            <Heading />
            <Cards cities={cities} onClose={onClose} />
            <Nav
                onSearch={onSearch}
            />
        </div>
    )
}
export default App;