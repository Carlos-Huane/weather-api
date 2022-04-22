import React from 'react';
import Style from '../Styles/Nav.module.css';
import Search from './Search.jsx';
 function Nav(props) {
  // acá va tu código
  return (
    <div className={Style.contenedorNav} style={{borderRadius:"1rem"}}>
      <nav class="navbar navbar-dark bg-dark" style={{borderRadius: "5px", padding: "3px"}}>
        <a  class="navbar-brand">Navbar</a>
        <Search onSearch={props.onSearch}/>
      </nav>
  
    </div>
  )
};
export default Nav;