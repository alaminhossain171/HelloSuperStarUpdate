import React from 'react';
import "../../CSS/Category/Category.css";
import frame from "../../../images/Normal-User/Single-frame.png";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import Navigation from '../../Header/Navigation';
const SubCategory = () => {
    return (
      <>
      <Navigation />
        <div className="main-container">
      <div className="container category-contaienr p-5 bg-dark  bg-img">
        <div className="d-flex justify-content-center align-items-center">
          <div className="center-frame">
            <img src={frame} alt="" className="frame" />
            <h6 className="category-title">CHOOSE CATEGORY</h6>
          </div>
        </div>

      <div className="carousel-items my-4">
      <OwlCarousel  center className='owl-theme' loop margin={15} items={3} mouseDrag >
  <div class='item'>
  <img src="https://p.imgci.com/db/PICTURES/CMS/290000/290089.jpg" alt="" />

  </div>
  <div class='item'>
  <img src="https://p.imgci.com/db/PICTURES/CMS/290000/290089.jpg" alt="" />
  </div>
  <div class='item'>
  <img src="https://wallpapertag.com/wallpaper/middle/9/3/b/851331-download-messi-and-neymar-wallpapers-1920x1080-for-4k-monitor.jpg" alt="" />
  </div>
 
</OwlCarousel>
      </div>

        

      

        <div className="category-footer mt-4 ">
          <h6 className=" text-center mt-2">
            <i className="far fa-star text-warning mx-1"></i>{" "}
            <i className="far fa-star text-warning mx-1"></i>{" "}
            <span className="text-light">Choose at least 5 Categories</span>{" "}
            <i className="far fa-star text-warning mx-1"></i>{" "}
            <i className="far fa-star text-warning mx-1"></i>
          </h6>

          <div className="ct-btn text-center">
            <Link to='/Starselection'><button className="btn mt-3 cg-done">Done</button></Link>
          </div>
        </div>
      </div>
    </div>
    </>
    );
};

export default SubCategory;