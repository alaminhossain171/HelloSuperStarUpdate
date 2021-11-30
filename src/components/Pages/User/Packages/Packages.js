import React from "react";
import Star from '../../../../images/Normal-User/star.png'
import "../../../CSS/Packages/package.css";
import {Link} from 'react-router-dom'
import Payment from "./Payment";

 
export const Packages = () => {
  return (
    <>
      <div className="Package-container mx-auto ">
        <div className="container  mx-auto ">
          <div className="row mx-auto  "> 
              <div className="pak-header text-center col-md-12">
                   <p text-center>Select the perfect package for you</p>
              </div>
            <div className="col-md-3 col-sm-6 package-bg my-5 ">
              <div className="pak-b">
                <div className="pa-header">
                  <p>Free</p>
                </div>
                <div className="package">
                  <p> <img src={Star} className="star" alt="star" /> One Free Voice Record</p>
                  <p><img src={Star} className="star" alt="star" /> One Free Video Upload</p>
                  <p><img src={Star} className="star" alt="star" /> One Entry in One Fan Group</p>
                  <p><img src={Star} className="star" alt="star" /> Free E-commerce Surfing</p>
                  <p><img src={Star} className="star" alt="star" /> </p>
                </div>
                <div className="but-c">
                <p ><span className="dollar-s">$</span> <b className="dollar">0.00</b></p>
                 <Link to="/coreCategory"><button className="package-btn">Free User</button></Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-12 package-bg my-5 ">
              <div className="pak-b">
                <div className="pa-header">
                  <p>Silver</p>
                </div>
                <div className="package">
                  <p><img src={Star} className="star" alt="star" /> 10% off.On Every Purchase.</p>
                  <p><img src={Star} className="star" alt="star" /> One Free Chat With A Star</p>
                  <p><img src={Star} className="star" alt="star" /> One Free Video Upload</p>
                  <p><img src={Star} className="star" alt="star" /> One Entry in One Fan Group</p>
                  <p><img src={Star} className="star" alt="star" /> Free E-commerce Surfing</p>
                </div>
                <div className="but-c">
                <p><span className="dollar-s">$</span> <b className="dollar">5.00</b></p>
                <button className="package-btn" type="button" data-bs-toggle="collapse" 
                      data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" 
                      aria-controls="panelsStayOpen-collapseThree">Buy Now
                    </button>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-12 package-bg my-5 ">
              <div className="pak-b">
                <div className="pa-header">
                  <p> Gold</p>
                </div>
                <div className="package">
                  <p><img src={Star} className="star" alt="star" /> One Free Voice Record</p>
                  <p><img src={Star} className="star" alt="star" /> One Free Voice Record</p>
                  <p><img src={Star} className="star" alt="star" /> One Free Voice Record</p>
                  <p><img src={Star} className="star" alt="star" /> One Free Voice Record</p>
                  <p><img src={Star} className="star" alt="star" /> Free E-commerce Surfing</p>
                </div>
                <div className="but-c">
                <p><span className="dollar-s">$</span> <b className="dollar">10.00</b> </p>
                <button className="package-btn" type="button" data-bs-toggle="collapse" 
                      data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" 
                      aria-controls="panelsStayOpen-collapseThree">Buy Now
                    </button>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-12 package-bg my-5 ">
              <div className="pak-b">
                <div className="pa-header">
                  <p>Platinum</p>
                </div>
                <div className="package">
                  <p><img src={Star} className="star" alt="star" /> One Free Voice Record</p>
                  <p><img src={Star} className="star" alt="star" /> One Free Voice Record</p>
                  <p><img src={Star} className="star" alt="star" /> One Free Voice Record</p>
                  <p><img src={Star} className="star" alt="star" /> One Free Voice Record</p>
                  <p><img src={Star} className="star" alt="star" /> Free E-commerce Surfing</p>
                </div>
                <div className="but-c">
                    <p><span className="dollar-s">$</span> <b className="dollar">20.00</b></p>
                    <button className="package-btn" type="button" data-bs-toggle="collapse" 
                      data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" 
                      aria-controls="panelsStayOpen-collapseThree">Buy Now
                    </button>
                </div>
              </div>
            </div>
          </div>

         
          {/* Payment */}

          <Payment/>
            
          {/* Payment*/}

        </div>

      </div>
      
    </>
  );
};

export default Packages;
