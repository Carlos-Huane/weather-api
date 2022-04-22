import React, {useState} from 'react';

function Search(props){
    const [city,setCity]=useState('')
    function cambioCiudad(event){
        setCity(event.target.value);

    }
    function submit(e){
        e.preventDefault();
        props.onSearch(`${city}`);
        setCity('');
    }

    return(
        <form onSubmit={submit} class="form-inline" style={{display:"flex"}}>
            <input 
                class="form-control mr-sm-2" 
                type="search" placeholder="Ciudad..." 
                aria-label="Search" 
                onChange={cambioCiudad}
                value={city}
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Agregar</button>
        </form>
    )
}
export default Search;