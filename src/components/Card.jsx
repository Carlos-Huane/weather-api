import React from 'react';
import Style from '../Styles/Card.module.css'

   export function Card(props) {
   return (
   <div className={Style.card}>
       <button className={Style.btn} onClick={props.onClose}> X  </button>
       <h2 className={Style.h2}>{props.name}</h2>
       <div className={Style.contenidoCard}>  
            <div>
                <h3>Min</h3>
                <h4>{`${props.min} °`}</h4> 
            </div>
            <div>
                <h3>Max</h3>
                <h4>{`${props.max} °`}</h4> 
            </div>
            <div> 
                <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Logo del Clima"/>
            </div>
       </div>
   </div>)
    };
 export default Card;