import React from "react";

    export default function LearnContent({user}){
        return (
          <>
               <div className="container align-items-center justify-content-center col-11 Enroll-Auditions">
                   
                  <div className="card Enroll-AuditionsB">

                        <h2 className="accordion-header PostBack" >
                            <div className="accordion-button-fx profile1-accordion-button PostBack  collapsed">

                                  <img src={user.profilePicture} className="PostImgHome" alt={user.profilePicture} />
                                  <span className="mx-2 text-warning text-light">{user.username}<br></br>
                                      <small className="category-size-chat"> <span className="Post-small-text">{user.time}</span></small>
                                      <small className="category-size-chat"> <span className="Post-small-text-r">{user.date}</span></small>
                                  </span>

                             </div>
                        </h2>

                        <div className="my-2 Enroll-a Enroll-text">
                            {user.postTitel}
                        </div>
  
                        <div className="card PostCard">
                            <img src={user.postPic} alt={user.postPic} />
                        </div>
  
                        <div className="row align-items-center justify-content-center ">
                              <div className="container ">
                                  <ul className="PostHoUl Co-Auditions">
                                      <li className="like-post"> 
                                          <i className="fas fa-heart heart mx-1 "></i>
                                          <small className="profile-card-text">{user.LikeCount}</small>
                                      </li>
                                      <li className="share-post">
                                          <small className="profile-card-text">{user.ShareCount} Share</small>
                                      </li>
                                      <li className="comment-post">
                                          <small className=" profile-card-text">{user.CommentCount} Comment</small>
                                      </li>
  
                                  </ul>
                              </div>
                  
    
                              <div className="text-center hr-Auditions">
                                  <button className="btn-warning-post ">
                                      <i className="fas fa-heart text-danger  mx-1"></i>
                                      <small className="Post-Title-home"> Like</small>
                                  </button>
                                  <button className="btn-warning-post mx-2 ">
                                      <i className="fas fa-comment  mx-1 "></i>
                                      <small> Comment</small>
                                  </button>
                                  <button className="btn-warning-post">
                                      <i className="fas fa-share  mx-1"></i>
                                      <small> Share</small>
                                  </button>
                              </div>
  
  
                          </div>

                      
                  </div>
              </div>
          </>
        );
      };
      
     