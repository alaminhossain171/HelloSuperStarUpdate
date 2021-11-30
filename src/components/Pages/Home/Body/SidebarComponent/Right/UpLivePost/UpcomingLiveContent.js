import React from "react";
import '../../../../../../CSS/Home/Upcominglive.css'

export default function UpcomingLiveContent({user}){
        return (
          <>
               <div className="container align-items-center justify-content-center col-11 Enroll-Auditions">
                  <div className="card Enroll-AuditionsB">
    
                      <div className="my-2 Enroll-a Enroll-text">
                          {user.postTitel}
                      </div>

                      <div className="row align-items-center justify-content-center ">
                        
                            <div className="container align-items-center justify-content-center UpcomingLive col-md-6">
                                <div className="container xyz-auditions"> <br />
                                

                                    <div className="container d-flex  align-items-center justify-content-center">
                                        <b className="Upc-live">COMING SOON</b>
                                    </div>
                                    <div className="container d-flex  align-items-center justify-content-center">
                                        <b className="Upc-live-s">12<span className="Upc-live-h">H</span> 35<span className="Upc-live-h">M</span></b>
                                    </div>

                                    <div className="container d-flex  align-items-center justify-content-center">
                                        <button className="container d-flex  Upc-live-h-btn align-items-center justify-content-center">Remind me</button>
                                    </div>

                                </div>
                            </div>

                            
                            

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
      
     