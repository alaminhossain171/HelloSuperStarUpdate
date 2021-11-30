import React, { Component } from "react";
import LeftSidebar from '../../../../../../Sidebar/LeftSidebar'
import RightSidebar from '../../../../../../Sidebar/RightSidebar'
import Navigation from "../../../../../../Header/Navigation";
import UpcomingAuditions from "./UpcomingAuditions";

export default class AuditionsPost extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation/>
        <div className="homebody"  style={{ background: "#000000"}}>
          <div className="container-fluid custom-container">
            <div className="row">

              <div className="col-sm-3 justify-content-center">
                <LeftSidebar/>
              </div>

              <div className="col-sm-6 justify-content-center" >
                <UpcomingAuditions/>
              </div>

              <div className="col-md-3 justify-content-center" >
                <RightSidebar/>
              </div>

            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
