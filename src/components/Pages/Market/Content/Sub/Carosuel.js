import React from 'react'
import '../../../../CSS/Market/Carosuel.css';
import Market1 from "../../../../../images/Carosuel/Market/1.jpg"
import Market2 from "../../../../../images/Carosuel/Market/2.jpg"
import Market3 from "../../../../../images/Carosuel/Market/3.jpg"

const Carosuel = () => {
    return (
        <>  
            <div id="carouselExampleCaptions" className="CarosuelMP carousel slide" data-bs-ride="carousel">
               <div className="carousel-indicators">
                   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                 </div>
                 <div className="carousel-inner">
                   <div className="carousel-item active">
                     <img src={Market1} className="MP-carosuel " alt="..."/>
                     <div className="carousel-caption d-none d-md-block">
                       <p>Some representative placeholder content for the first slide.</p>
                     </div>
                   </div>
                   <div className="carousel-item">
                     <img src={Market2} className="MP-carosuel" alt="..."/>
                     <div className="carousel-caption d-none d-md-block">
                       <p>Some representative placeholder content for the second slide.</p>
                     </div>
                   </div>
                   <div className="carousel-item">
                     <img src={Market3} className="MP-carosuel" alt="..."/>
                     <div className="carousel-caption d-none d-md-block">
                       <p>Some representative placeholder content for the third slide.</p>
                     </div>
                   </div>
                 </div>
            </div>   
        </>
    )
}

export default Carosuel
