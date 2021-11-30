import React from "react";
import "./LiveChatProfie.css";
import live from "../../../../images/admin-panel/AdminLiveProfile/live 1.png";
import liveperson from "../../../../images/admin-panel/AdminLiveProfile/video-chat.png";
import discount from "../../../../images/admin-panel/AdminLiveProfile/discount 1.png";
import price from "../../../../images/admin-panel/AdminLiveProfile/calendar.png";
import clock from "../../../../images/admin-panel/AdminLiveProfile/clock.png";
import { Link } from "react-router-dom";
const LiveChatProfile = () => {
  return (
    <div>
      <div class="card liveChatCard m-4 ">
        <div class="card-body">
          <div className="card-title text-light">
            <img src={live} alt="" className="img-fluid mx-2" />

            <span> Live Chat profie</span>
          </div>

          <div className="row py-2">
            <div className="col-5">
              <div className="">
                <img
                  src={liveperson}
                  alt=""
                  className="img-fluid live-person"
                />
              </div>
            </div>
            <div className="col-7">
              <h4 className="text-light">Instructions</h4>
              <p className="text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, quo. Lorem, ipsum dolor.
              </p>

              <p className="text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium tenetur quod esse porro voluptates? Quae obcaecati,
                nam eum deleniti ipsam porro id commodi, minima delectus
                doloremque exercitationem sequi, dolor modi.
              </p>

              <div className=" down-content d-flex p-1 mt-5">
                <img src={discount} className="img-fluid" alt="" />
                <div className="live-content">
                  <span className="text-light">Cost per minute</span>
                  <br></br>
                  <span className="fw-bold text-warning">1200 BDT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pricing-btn d-flex m-4">
        <div className="d-flex down-content-btn">
          <span>
            <img src={price} alt="" />
          </span>
          <div className="price-content mx-2">
            <span className="text-light">Date</span>
            <br></br>
            <span className="fw-bold text-warning">21th November</span>
          </div>
        </div>
        <div className="d-flex mx-4 down-content-btn">
          <span>
            <img src={clock} alt="" />
          </span>
          <div className="price-content mx-2">
            <span className="text-light">Time</span>
            <br></br>
            <span className="fw-bold text-warning">21th November</span>
          </div>
        </div>
      </div>

      <div className="down-modify-button mt-5 m-4">
        <button className="btn btn-warning px-5 fw-bold text-light">
          Edit
        </button>
        <button className="btn text-warning px-5 mx-3 modify-btn-2">
          Delete
        </button>

       <Link to='/admin/live-chat'>
       <button className="btn btn-success px-5 mx-3 modify-btn-2">
         Back to Home
        </button>
       </Link>

      </div>
    </div>
  );
};

export default LiveChatProfile;
