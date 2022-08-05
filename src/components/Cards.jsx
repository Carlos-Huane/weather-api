import React from 'react';
import Card from './Card.jsx'
import Style from '../Styles/Cards.module.css'
  
function Cards(props) {
  if(props.cities.length){
    return (
      <div className={Style.cards}>
        {
          props.cities.map((element) =>  {
        
            return( 
            <Card
              key={element.id}
              max={element.max}
              min={element.min}
              name={element.name}
              img={element.img}
              onClose={()=>props.onClose(element.id)}
            />)
          })
        }
      </div>
    )
  }
  else{
    return(
      <div className={Style.nociudad}>
        <h1>No country or city added :( </h1>  
      </div>
    )
  }
}
   
export default Cards;