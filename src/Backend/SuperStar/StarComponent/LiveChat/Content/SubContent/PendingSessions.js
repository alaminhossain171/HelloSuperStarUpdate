import React from "react";
import azhari from "../../../../../../images/starProfile/azhari-profile.jpg";
const PendingSessions = () => {
  return (
    <>
      <div className="card ad-card">
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body ">
            <div className="row">
              <div className="col-md-4" >
                <div class="card p-3 bg-dark shadow" style={{ border:'1px solid yellow' }}>
                  <div className="text-center">
                    <img
                      src={azhari}
                      class="card-img-top img-fluid rounded-circle"
                      style={{ height: "100px", width: "100px" }}
                      alt="..."
                    />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title text-center text-light">
                      {" "}
                      Mizanur Rahman Azhari
                    </h5>
                  </div>
             
                  <div className="text-center">
                    <button className=" btn-danger">Reject</button>
                    <button className=" btn-success mx-2 ">Approve</button>
                    <button className=" btn-primary">View</button>
                  </div>
                </div>
              </div>



              <div className="col-md-4" >
                <div class="card p-3 bg-dark shadow" style={{ border:'1px solid yellow' }}>
                  <div className="text-center">
                    <img
                      src={azhari}
                      class="card-img-top img-fluid rounded-circle"
                      style={{ height: "100px", width: "100px" }}
                      alt="..."
                    />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title text-center text-light">
                      {" "}
                      Mizanur Rahman Azhari
                    </h5>
                  </div>
             
                  <div className="text-center">
                    <button className=" btn-danger">Reject</button>
                    <button className=" btn-success mx-2 ">Approve</button>
                    <button className=" btn-primary">View</button>
                  </div>
                </div>
              </div>




              <div className="col-md-4" >
                <div class="card p-3 bg-dark shadow" style={{ border:'1px solid yellow' }}>
                  <div className="text-center">
                    <img
                      src={azhari}
                      class="card-img-top img-fluid rounded-circle"
                      style={{ height: "100px", width: "100px" }}
                      alt="..."
                    />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title text-center text-light">
                      {" "}
                      Mizanur Rahman Azhari
                    </h5>
                  </div>
             
                  <div className="text-center">
                    <button className=" btn-danger">Reject</button>
                    <button className=" btn-success mx-2 ">Approve</button>
                    <button className=" btn-primary">View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PendingSessions;
