import React from "react";
import Carousel from "../../Market/Content/Sub/Carosuel";
import Profile from "../../Market/Content/Sub/Profile";


export const Content = () => {
  return (
    <>

        <div className="MarketPlace ">

            <div className="Carosuel-mp col-md-10">
              <Carousel/>
            </div>

            <div className="Carosuel-mp Post-mp-bg row col-10 d-flex">
              <Profile/>
            </div>

        </div>
    </>
  );
};
export default Content;
