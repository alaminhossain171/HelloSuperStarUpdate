import React, { Component } from "react";
// import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LeftSidebar from '../../../../Sidebar/Right'
import RightSidebar from '../../../../Sidebar/RightSidebar'
// import SubCategoryContent from "./SubCategoryContent";



export default class SubCategory extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="homebody"  style={{ background: "#000000"}}>
          <div className="container-fluid custom-container">
            <div className="row">

              <div className="col-sm-3 justify-content-center">
                <LeftSidebar/>
              </div>
              
              <div className="col-sm-6 justify-content-center" >

              {/* {
                category.map((item)=>

                <BrowserRouter>
                    <Switch>
                        <Route exact path={"/category/"+item.name}>
                                    <SubCategoryContent/>
                        </Route>
                    </Switch>
                </BrowserRouter>
                )
                } */
                }
                

               
            
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
