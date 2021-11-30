import React from 'react';
import "../../CSS/Category/Category.css";
import frame from "../../../images/Normal-User/Single-frame.png";
import Cricketer from '../../../images/Cricket.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import Navigation from '../../Header/Navigation';

const StarSelection = () => {
    return (
      <>
      <Navigation />


      
        <div className="main-container">
        <div className="star-container category-contaienr py-5 bg-dark  bg-img">
          <div className="d-flex justify-content-center align-items-center">
            <div className="center-frame">
              <img src={frame} alt="" className="frame2" />
              <h6 className="category-title" style={{ fontSize:'13px' }}>CHOOSE SUPERSTARS</h6>
            </div>
          </div>


<OwlCarousel   center className='owl-theme' loop margin={0} items={3} mouseDrag >
  <div class='superstar-item'>
  
  <img src={Cricketer}className='img-fluid ' alt="" />
<div className="text-center">
<button className='btn btn-primary star-btn'>Sakib Al Hasan</button>
</div>
  </div>
  <div class='superstar-item '>
  <img src={Cricketer} alt="" className='img-fluid'  />
  <div className="text-center">
<button className='btn btn-primary star-btn mx-3'>Sakib Al Hasan</button>
</div>
  </div>
  <div class='superstar-item '>
  <img src={Cricketer} alt="" className='img-fluid' />
  <div className="text-center">
<button className='btn btn-primary star-btn'>Sakib Al Hasan</button>
</div>
  </div>
 
</OwlCarousel>



          

        
  
          <div className="category-footer mt-4 ">
            <h6 className=" text-center mt-2">
              <i className="far fa-star text-warning mx-1"></i>
              <i className="far fa-star text-warning mx-1"></i>
              <span className="text-light">Choose at least 5 Categories</span>
              <i className="far fa-star text-warning mx-1"></i>
              <i className="far fa-star text-warning mx-1"></i>
            </h6>
  
            <div className="ct-btn text-center">
             <Link to='/'> <button className="btn mt-3 cg-done">Done</button></Link>
            </div>
          </div>
        </div>
      
      </div>
      </>
    );
};

export default StarSelection;