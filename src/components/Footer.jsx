import React from "react";
import Style from '../Styles/Footer.module.css'
import {NavLink} from 'react-router-dom'
function Footer () {
    return (
       <div class="container-fluid" className={Style.text}> 
        <div className="row  bg-secondary p-3 text-white" >
 
            <div class="col-lg-4"><h4><NavLink to="/weather-api" >Weather API</NavLink></h4></div>
            <div class="col-lg-4"><h4><NavLink to="/weather-api/about-proyect">About The Proyect</NavLink></h4></div>
            <div class="col-lg-4">
                <div className="RedesSociales">
                    <a style={{fontSize:"1.4rem"}}> <h4 style={{display:"inline"}}>Social Networks</h4></a>  
                    <a className= {Style.icons} href="https://twitter.com/hsproyect">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                        </svg>
                    </a>
                    
                    <a className= {Style.icons} href="https://github.com/Carlos-Huane">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                        </svg>
                    </a>
                    <a className={Style.icons} href="https://www.linkedin.com/in/carlos-huane-317934235/">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0000FF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <rect x="4" y="4" width="16" height="16" rx="2" />
                            <line x1="8" y1="11" x2="8" y2="16" />
                            <line x1="8" y1="8" x2="8" y2="8.01" />
                            <line x1="12" y1="16" x2="12" y2="11" />
                            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                        </svg>
                    </a>
                </div>
            
            </div>
        </div>
       </div>  
    )
}

export default Footer;