import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Children from '../../../../../../../images/starProfile/starPostLeftContent/children.jpg';
import Jainamaj from '../../../../../../../images/starProfile/starPostLeftContent/jainamaz.jpg';
import Topi from '../../../../../../../images/starProfile/starPostLeftContent/Cap.jpg';
import Habibi from '../../../../../../../images/starProfile/starPostLeftContent/Habibi.jpg';
// import Vector1 from '../../../../../../../images/starProfile/starPostLeftContent/Card3/1.jpg';
// import Vector2 from '../../../../../../../images/starProfile/starPostLeftContent/Card3/2.jpg';
import { Link } from 'react-router-dom';
import LiveChatpic from '../../../../../../../images/LiveChat/Live.png'
// css design comes from star post page
const StarProfileRightContent = () => {
    return (
        <>
 <div class="card mx-auto my-4 left-card-star left-star-card">
            <div class="card-body">
              <h6 class="card-title text-warning"> Live chat</h6>
              {/* <button class="pulse-button"></button> */}
             <div className="container d-flex justify-content-center align-items-center">
               <img src={LiveChatpic} alt="" className='pulse-button  img-fluid liveChatpic'/>
             </div>
   <div className="text-center mt-3 ">
   <Link to='/liveChat'><button className='w-100 enroll-btn '>Live chat</button></Link>
   </div>

            </div>
          </div>


            <div class="card mx-auto my-4 left-card-star left-star-card">
            <div class="card-body">
              <h6 class="card-title text-warning">Audition Announcement</h6>

              <div className="container star-content">
                <img
                  src={Children}
                  class="card-img-top img-fluid star-left-photo"
                  alt="..."
                />
                <div className="other-content">
                  <h6 className="text-bold">Quran Recetiong Audition</h6>
                  <small>Form july 22 to july 25</small>
                </div>
              </div>

              <div className="text-center ">
                <button className="w-100 enroll-btn mt-3">Enroll now</button>
              </div>
            </div>
          </div>

          <div class="card mx-auto my-4 left-card-star left-star-card">
            <div class="card-body">
              <h6 class="card-title text-warning">Souvenir</h6>

              <div className="container">
                <OwlCarousel className="owl-theme" loop margin={5} nav>
                  <div class="item">
                    <img
                      src={Jainamaj}
                      alt=""
                      className="img-fluid"
                      class="souviner-product-img"
                    />
                  </div>
                  <div class="item">
                    <img
                      src={Topi}
                      alt=""
                      className="img-fluid"
                      class="souviner-product-img"
                    />
                  </div>
                  <div class="item">
                    <img
                      src={Habibi}
                      alt=""
                      className="img-fluid"
                      class="souviner-product-img"
                    />
                  </div>
                </OwlCarousel>
                ;
              </div>

              <div className="text-center">
                <button className="w-100 enroll-btn">
                  Browse Mizanur Rahman Souvenir
                </button>
              </div>
            </div>
          </div>

          {/* <div class="card mx-auto my-4 left-card-star left-star-card">
            
            <div class="card-body">
              <h6 class="card-title text-warning">Requested for</h6>

              <div className=" d-flex justify-content-around">
                <img
                  src={Vector1}
                  class="img-fluid souviner-request-img"
                  alt=""
                />
                <img
                  src={Vector2}
                  class="img-fluid souviner-request-img"
                  alt=""
                />
              </div>
            </div>

            <div className="container mb-2">
              <div className="row">
                <div className="col-6 ">
                  <button className="w-100 star-last-btn p-1">
                    Greeting/Birthday/wish
                  </button>
                </div>
                <div className="col-6">
                  <button className="w-100 star-last-btn p-1">Live Chat</button>
                </div>
              </div>
            </div>
          </div> */}
        </>
    );
};

export default StarProfileRightContent;