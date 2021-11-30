import React from "react";
import "../../CSS/Profile/starProfile/starProfile.css";
import AzhariProfile from "../../../images/starProfile/azhariCover.jpg";
import ProfileAzhari from "../../../images/starProfile/profile-azhari.png";
import { Navbar, Container, Nav } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import StarPhotos from "../../Pages/Profile/profile-components/starProfile/StarPhotos";

import Videos from "../../Pages/Profile/profile-components/starProfile/Videos";
import Souviner from "../../Pages/Profile/profile-components/starProfile/Souviner";
import Audition from "../../Pages/Profile/profile-components/starProfile/Audition";
import StarPost from "../../Pages/Profile/profile-components/starProfile/StarPost";
import Navigation from "../../Header/Navigation";
import LiveChat from "./profile-components/starProfile/LiveChat/LiveChat";
import StarChat from './profile-components/starProfile/StarChat/StarChat';

const StarProfile = () => {
  return (
    <>
      <Navigation />
      <div className="full-container py-3">
        <div className="container star-cover mb-2">
          <div className="profile-img-cover ">
            <div className="profile-container ">
              <img
                src={AzhariProfile}
                alt="bg-img"
                className="img-fluid profile-cover"
              />

              <div className="star-profile-pic d-flex">
                <img
                  src={ProfileAzhari}
                  alt=""
                  className="img-fluid profile-star "
                />
                <div className="profile-name-contents mt-5 mx-2">
                  <h3 className="text-light mt-5 star-profile-name">Mizanur Rahman Azhari</h3>
                  <p className="text-warning star-profile-type">Public Figure Religious</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container next-div">
          <div className="line-div my-1"></div>
          <Router>
            <Navbar>
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mx-auto">
                    <NavLink exact to="/" className="text-decoration-none" style={isActive => ({
                      color: isActive ? "#ffad00" : "white"
                    })}>Posts</NavLink>
                    <NavLink to="/photos" className='mx-2 text-decoration-none' style={isActive => ({
                      color: isActive ? "#ffad00" : "white"
                    })}>Photos</NavLink>
                    <NavLink to="/videos" className='mx-2 text-decoration-none' style={isActive => ({
                      color: isActive ? "#ffad00" : "white"
                    })}>Videos</NavLink>
                    <NavLink to="/souviner" className='mx-2 text-decoration-none' style={isActive => ({
                      color: isActive ? "#ffad00" : "white"
                    })}>Souviner</NavLink>
                    <NavLink to="/audition" className='mx-2 text-decoration-none' style={isActive => ({
                      color: isActive ? "#ffad00" : "white"
                    })}>Audition</NavLink>

                    
                    {/* <NavLink to="/starChat" className='mx-2 text-decoration-none' style={isActive => ({
                      color: isActive ? "#ffad00" : "white"
                    })}>Star Chat</NavLink> */}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            
            <Switch>
              <Route path="/photos" exact component={StarPhotos} />
              <Route path="/videos" exact component={Videos} />
              <Route path="/souviner" exact component={Souviner} />
              <Route path="/audition" exact component={Audition} />
              <Route path='/liveChat' exact component={LiveChat} />
              <Route exact path="/starChat" component={StarChat} />
              <Route path="/" component={StarPost} />
            </Switch>
          </Router>
        </div>
      </div>
    </>
  );
};

export default StarProfile;
