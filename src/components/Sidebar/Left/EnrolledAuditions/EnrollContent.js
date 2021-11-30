import React from "react";
import ReactPlayer from "react-player";
import '../../../CSS/Sidebar/Left/Enroll.css'

export default function EnrollContent({user}){
    return (
      <>
           <div className="container align-items-center justify-content-center col-11 Enroll-Auditions">
              <div className="card Enroll-AuditionsB">

                  <div className="my-2 Enroll-a Enroll-text">
                      {user.postTitel}
                  </div>
                  <div className="row align-items-center justify-content-center ">
                    
                        <div className="col-md-6 ">

                            <ReactPlayer url="https://youtu.be/3jtqM_EsUCQ" className="Enroll-Video" playing={false} 
                                volume={1}  onReady={() => console.log("ready now")}
                            />

                        </div>

                        <div className="col-md-5 " >
                           <div className="Enroll-row">
                               <label className="Enroll-row-t">Host</label>
                               <p className="Enroll-row-t pxs">{user.username}</p>
                           </div>
                           <div className="Enroll-row">
                               <label className="Enroll-row-t">Candidates</label>
                               <p className="Enroll-row-t pxs">{user.candidate}</p>
                           </div>
                           <div className="Enroll-row">
                               <label className="Enroll-row-t">Date</label>
                               <p className="Enroll-row-t pxs">{user.pdate}</p>
                           </div>
                        </div>
                        
                  </div>
                  <div className="my-2 Enroll-a Enroll-btn">
                        <button>View result</button>
                  </div>

              </div>
          </div>
      </>
    );
  };
  
 