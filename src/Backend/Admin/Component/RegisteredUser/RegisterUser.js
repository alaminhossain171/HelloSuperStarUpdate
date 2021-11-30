import React, { useState } from "react";
import "./RegisterUser.css";
import fatema from "../../../../images/admin-panel/fatema.jpg";
// import sakib from '../../../../images/LiveChat/Shakib-Al-Hasan.jpg'
import enjoy from '../../../../images/LiveChat/enjoy.png'

import RegisterLeftCard from "./component/RegisterLeftCard";

const RegisterUser = () => {
  const [showItem, setShowItem] = useState(false);
  function handleClick() {
    setShowItem(true);
  }
  return (
    <div className="row ">
      <div className="col-md-8 ">
        <div className="table-info my-2">
          <h5 className="text-warning mx-2 p-2">Registered Users</h5>
          <table className="table text-light">
            <tbody>
              <tr>
                <th scope="row">
                  <img src={fatema} alt="" className="rounded-circle mx-1" />
                  <span> Fatema Akter</span>
                </th>
                <th>11:50 pm</th>
                <th>5 minute</th>
                <th>
                  <button className="btn call-btn" onClick={handleClick}>
                    <span>
                      <i className="fas fa-video mx-1"></i>
                    </span>
                    Call
                  </button>
                </th>
              </tr>

              <tr>
                <th scope="row">
                  <img src={fatema} alt="" className="rounded-circle mx-1" />
                  <span> Fatema Akter</span>
                </th>
                <th>11:50 pm</th>
                <th>5 minute</th>
                <th>
                  <button className="btn call-btn" onClick={handleClick}>
                    <span>
                      <i className="fas fa-video mx-1"></i>
                    </span>
                    Call
                  </button>
                </th>
              </tr>

              <tr>
                <th scope="row">
                  <img src={fatema} alt="" className="rounded-circle mx-1" />
                  <span> Fatema Akter</span>
                </th>
                <th>11:50 pm</th>
                <th>5 minute</th>
                <th>
                  <button className="btn call-btn" onClick={handleClick}>
                    <span>
                      <i className="fas fa-video mx-1"></i>
                    </span>
                    Call
                  </button>
                </th>
              </tr>

              <tr>
                <th scope="row">
                  <img src={fatema} alt="" className="rounded-circle mx-1" />
                  <span> Fatema Akter</span>
                </th>
                <th>11:50 pm</th>
                <th>5 minute</th>
                <th>
                  <button className="btn call-btn" onClick={handleClick}>
                    <span>
                      <i className="fas fa-video mx-1"></i>
                    </span>
                    Call
                  </button>
                </th>
              </tr>

              <tr>
                <th scope="row">
                  <img src={fatema} alt="" className="rounded-circle mx-1" />
                  <span> Fatema Akter</span>
                </th>
                <th>11:50 pm</th>
                <th>5 minute</th>
                <th>
                  <button className="btn call-btn" onClick={handleClick}>
                    <span>
                      <i className="fas fa-video mx-1"></i>
                    </span>
                    Call
                  </button>
                </th>
              </tr>
              <tr>
                <th scope="row">
                  <img src={fatema} alt="" className="rounded-circle mx-1" />
                  <span> Fatema Akter</span>
                </th>
                <th>11:50 pm</th>
                <th>5 minute</th>
                <th>
                  <button className="btn call-btn" onClick={handleClick}>
                    <span>
                      <i className="fas fa-video mx-1"></i>
                    </span>
                    Call
                  </button>
                </th>
              </tr>

              <tr>
                <th scope="row">
                  <img src={fatema} alt="" className="rounded-circle mx-1" />
                  <span> Fatema Akter</span>
                </th>
                <th>11:50 pm</th>
                <th>5 minute</th>
                <th>
                  <button className="btn call-btn" onClick={handleClick}>
                    <span>
                      <i className="fas fa-video mx-1"></i>
                    </span>
                    Call
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="col-md-4 ">
        {showItem ? (
// video work start here
<div class="card right-live-card-bg my-2 w-75 mx-auto">
  <div className="content1">
    <img src={enjoy} alt="" className='img-fluid icons-videos' />
    <button className='btn'> <i className="fas fa-clock mx-1"></i>4:40</button>
  </div>
<div class="card-body">
 <div className="container text-center bg-dark p-2 icons-videos">
   <button className='btn w btn-warning text-light btn-rounded'><i className="fas fa-microphone fa-2x"></i></button>
   <button className='mx-2 w btn btn-warning text-light p-2 btn-rounded'><i className="fas fa-video fa-2x"></i></button>
   <button className='btn w btn-warning text-light btn-rounded'><i className="fas fa-times fa-2x"></i></button>
 </div>
</div>
</div>
        ) : (
          <RegisterLeftCard />
        )}
      </div>
    </div>
  );
};

export default RegisterUser;
