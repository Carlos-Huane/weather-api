import React from 'react';
import Style from '../Styles/About.module.css'
const About = () => {
    return(
    <div className= {Style.text}>
        <p> In this project I created a page that indicates the minimum and maximum 
            temperatures of each city using html, css, React, framework such as bootstrap 
            for browser design and good practices with react, as well as css modules for page 
            design. I applied and deepened concepts such as component composition, states, props 
            and hooks, as well as the use of apis calls through FETCH and routing for a SPA
            (Single Page Application) website with the aim of showing specific details of the climate 
            of each Country City. I hope you like it.
        </p>
    </div>
    )
}
export default About;