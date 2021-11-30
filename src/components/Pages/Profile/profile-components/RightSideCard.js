import React from "react";
// import Azhari from '../../../../images/Profile/Azhari.jpg';
// import azhariProfile from '../../../../images/Profile/azhari-profile.jpg'

const RightSideCard = (props) => {
  return (
    <>
      <div className="card left-col-box mb-3">
        <div className="container">
          <div className="row">
            <div className="col-2 mt-2">
              <img
                src={props.profileLogo}
                alt=""
                className="img-fluid rounded-circle"
                width="70px"
              />
            </div>
            <div className="col-10 mt-2">
              <h6 className='text-light'>{props.Name}</h6>
              <small className='profile-time-text'>5:31pm</small> <small className='profile-time-text'>2nd july</small>
            </div>
          </div>
        </div>

        <div className="container my-2 text-light">
          <p>
            {props.Msg} <i className="far fa-heart mx-1"></i>
          </p>
        </div>

        <img
          src={props.profileImg}
          className="card-img-top profile-card-img img-fluid mx-auto"
          alt="..."
        />
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col-4">
              <i className="fas fa-heart heart mx-1 "></i>
                <small className="profile-card-text">240</small>
              </div>
              <div className="col-8 d-flex justify-content-around">
                <div className="right-text">
                {/* <i className="fas fa-comment  text-light mx-1"></i> */}
                
                <small className=" profile-card-text">160 Comment</small>
                </div>
                <div className="left-text">
                {/* <i className="fas fa-share d-inline text-light mx-1"></i> */}
                
                <small className="d-inline profile-card-text">250 Share</small>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="container">
            <div className="row">
              <div className="col-6">
                <i className="fas fa-heart heart mx-1 "></i>
                <small className="profile-card-text">240</small>
              </div>

              <div className="col-3">
                <i className="fas fa-comment d-inline text-light mx-1"></i>
                <small className="d-inline profile-card-text">Comment</small>
              </div>

              <div className="col-3">
                <i className="fas fa-share d-inline text-light mx-1"></i>
                <small className="d-inline profile-card-text">Share</small>
              </div>
            </div>
          </div> */}

          <hr className="hr-line" />

          <div className="text-center">
            <button className="btn btn-warning mt-1">
              <i className="fas fa-heart text-danger  mx-1"></i>
              <small className="text-light"> Like</small>
            </button>
            <button className="btn btn-warning mx-2 mt-1">
              <i className="fas fa-comment  mx-1 "></i>
              <small> Comment</small>
            </button>
            <button className="btn btn-warning mt-1">
              <i className="fas fa-share  mx-1"></i>
              <small> Share</small>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSideCard;
