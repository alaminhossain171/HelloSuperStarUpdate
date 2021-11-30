import React from 'react'
import '../../CSS/Navbar.css'
import $ from 'jquery'
import {Link, withRouter} from 'react-router-dom'

const SideNavbar = ({history}) => {

console.log(history)
const getColor=(curr)=>
{
if (history.location.pathname===curr)
return "#FFAD00"
}

$(document).ready(function(){
$('.nav_btn').click(function(){
$('.mobile_nav_items').toggleClassNclassName('active');
});
});

return (
    <>

      <header>
        <label for="check">
          <i className="fas fa-bars" id="sidebar_btn"></i>
        </label>
        <div className="left_area">
          {/* <h3>Coding <span>Snow</span></h3> */}
        </div>
        <div className="right_area">
          {/* <Link className="logout_btn">Logout</Link> */}
        </div>
      </header>

      <div className="mobile_nav">
        <div className="nav_bar">
          {/* <img src="1.png" className="mobile_profile_image" alt="" /> */}
          <i className="fa fa-bars nav_btn"></i>
        </div>
        <div className="mobile_nav_items">
          <Link to='/admin-manager' style={{backgroundColor:getColor('/admin-manager')}}><i className="fas fa-desktop"></i><span>Dashboard</span></Link>
          <Link to='/admin-manager/events' style={{backgroundColor:getColor('/admin-manager/events')}}><i className="fas fa-cogs"></i><span>Events</span></Link>
          <Link to='/admin-manager/progressbar' style={{backgroundColor:getColor('/admin-manager/progressbar')}}><i className="fas fa-cogs"></i><span>Progess bar</span></Link>
          <Link to='/admin-manager/sidenav4' style={{backgroundColor:getColor('/admin-manager/sidenav4')}}><i className="fas fa-cogs"></i><span>Sidenav 4</span></Link>
         
        </div>
      </div>

      <div className="sidebar">

        <Link to='/admin-manager'style={{backgroundColor:getColor('/admin-manager')}}><i className="fas fa-desktop"></i><span>Dashboard</span></Link>
        <Link to='/admin-manager/events' style={{backgroundColor:getColor('/admin-manager/events')}}><i className="fas fa-cogs"></i><span>Events</span></Link>
        <Link to='/admin-manager/progressbar' style={{backgroundColor:getColor('/admin-manager/progressbar')}}><i className="fas fa-cogs"></i><span>Progess bar</span></Link>
        <Link to='/admin-manager/sidenav4' style={{backgroundColor:getColor('/admin-manager/sidenav4')}}><i className="fas fa-cogs"></i><span>Sidenav 4</span></Link>
        

      </div>

    </>
  )
}

export default withRouter(SideNavbar)