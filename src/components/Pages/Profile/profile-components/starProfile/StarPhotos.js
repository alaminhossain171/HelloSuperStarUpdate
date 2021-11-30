import React from "react";
import "../../../../CSS/Profile/starProfile/starPhotos.css";
import azhari from "../../../../../images/starProfile/StarPhotos/1.jpg";
import azhari2 from "../../../../../images/starProfile/StarPhotos/2.jpg";
import azhari3 from "../../../../../images/starProfile/StarPhotos/3.jpg";
import azhari4 from "../../../../../images/starProfile/StarPhotos/4.jpg";
import azhari5 from "../../../../../images/starProfile/StarPhotos/5.jpg";
import azhari6 from "../../../../../images/starProfile/StarPhotos/6.jpg";
import azhari7 from "../../../../../images/starProfile/StarPhotos/7.jpg";
import azhari8 from "../../../../../images/starProfile/StarPhotos/8.jpg";
import azhari9 from "../../../../../images/starProfile/StarPhotos/9.jpg";
import StarProfileRightContent from "./StarCardComponent/StarProfileRightContent/StarProfileRightContent";
import StarPhotosDetails from "./StarPhotosDetails";

export default function StarPhotos() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 mt-3">
          <div class="card m-2 star-photos-card mx-auto pb-3">
            <div class="card-body">
              <h5 class="card-title text-warning">Photos</h5>
            </div>
            <div className="star-line"></div>

            <div className="card-body mb-2">
              <div className="row text-center">
                <div className="col-4  ">

                  <StarPhotosDetails />
                  {/* <img
                    src={azhari}
                    alt=""
                    className="img-fluid star-card-left-photos"
                  /> */}
                </div>

                <div className="col-4 ">
                  <img
                    src={azhari2}
                    alt=""
                    className="img-fluid star-card-left-photos"
                  />
                </div>
                <div className="col-4 ">
                  <img
                    src={azhari3}
                    alt=""
                    className="img-fluid star-card-left-photos"
                  />
                </div>
              </div>

              <div className="row text-center mt-3">
                <div className="col-4  ">
                  <img
                    src={azhari4}
                    alt=""
                    className="img-fluid star-card-left-photos"
                  />
                </div>

                <div className="col-4 ">
                  <img
                    src={azhari5}
                    alt=""
                    className="img-fluid star-card-left-photos"
                  />
                </div>
                <div className="col-4 ">
                  <img
                    src={azhari6}
                    alt=""
                    className="img-fluid star-card-left-photos"
                  />
                </div>
              </div>

              <div className="row text-center mt-3">
                <div className="col-4  ">
                  <img
                    src={azhari7}
                    alt=""
                    className="img-fluid star-card-left-photos"
                  />
                </div>

                <div className="col-4 ">
                  <img
                    src={azhari8}
                    alt=""
                    className="img-fluid star-card-left-photos"
                  />
                </div>
                <div className="col-4 ">
                  <img
                    src={azhari9}
                    alt=""
                    className="img-fluid star-card-left-photos"
                  />
                </div>
              </div>
            </div>
           
          </div>
        </div>

        <div className="col-md-4">
   <StarProfileRightContent />
        </div>
      </div>
    </div>
  );
}
