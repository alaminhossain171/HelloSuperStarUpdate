import React from 'react';
import profilePhoto from "../../../../../../images/Profile/azhari-profile.jpg";
// import ReactPlayer from "react-player";

const CardComponent = (props) => {
    return (
        <>
            <div className="card left-col-box PostCard mb-3 mt-3 left-card-star mx-auto">
            <div className="accordion-item PostBack ">
              <h2 className="accordion-header PostBack">
                <div className="accordion-button-fx profile1-accordion-button PostBack  collapsed">
                  <img src={profilePhoto} className="PostImgHome" alt="..." />
                  <span className="mx-2 text-warning text-light">
                   {props.name}<br></br>
                    <small className="category-size-chat ">
                      {" "}
                      <span className="Post-small-text">{props.time}</span>
                    </small>
                    <small className="category-size-chat ">
                      {" "}
                      <span className="Post-small-text-r">{props.date}</span>
                    </small>
                  </span>
                </div>
              </h2>
            </div>
            <div className="container my-2 Post-Title-home">
             {props.msg}
              <i className="far fa-heart mx-1"></i>
            </div>

            {/* <video id="my_video_1" className="video-js vjs-default-skin card-img-top img-fluid mx-auto PostImgHe" 
                        controls preload="none" poster={props.posterImg} data-setup='{}'>
                        <source src={props.PostVideo} type='video/mp4' />
                    </video> */}

                    {/* content start here */}
   {props.content}
  {/* content start here */}
            <div className="card-body">
              <div className="container">
                <ul className="PostHoUl">
                  <li className="like-post">
                    <i className="fas fa-heart heart mx-1 "></i>
                    <small className="profile-card-text">{props.love}</small>
                  </li>
                  <li className="share-post">
                    <small className="profile-card-text">{props.share}</small>
                  </li>
                  <li className="comment-post">
                    <small className=" profile-card-text">105 Comments</small>
                  </li>
                </ul>
              </div>
              <hr class="new5" />

              <div className="text-center">
                <button className="btn star-button-1 mt-1">
                  <i className="fas fa-heart text-danger mx-1"></i>
                  <small className="text-dark"> Like</small>
                </button>
                <button className="btn star-button-2 mx-2 mt-1">
                  <i className="fas fa-comment  mx-1 "></i>
                  <small> Comment</small>
                </button>
                <button className="btn star-btutton-3 mt-1">
                  <i className="fas fa-share  mx-1"></i>
                  <small> Share</small>
                </button>
              </div>
            </div>
          </div> 
        </>
    )
}

export default CardComponent
