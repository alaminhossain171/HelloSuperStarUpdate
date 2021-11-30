import React  from 'react'
import {Link, withRouter} from 'react-router-dom'

import '../CSS/Sidebar/Right/Right.css'

import Live from './Right/LiveNow/Live'
import Learn from './Right/LearningSessions/Learn'
import UpLive from './Right/UpcomingLive/UpLive'
import UpAuditions from './Right/UpcomingAuditions/UpAudions'



export const RightSidebar = ({history}) => {
    
    console.log(history)
    const getColor=(curr)=>
    {
      if (history.location.pathname===curr)
      return "#FFAD00"
    }

    return (
        <>
            <div className="LinkBtn">
                <div className="accordion right-col-box-home-r mt-3">

                    <div className="live-text-sln">Live now</div> 

                    <div className="Live-S-Nav d-flex" id="headingTwo">

                       <Live/>

                       <Link to='/live-now'>
                            <button className="Live-RS-btn" style={{backgroundColor:getColor('/live-now')}}>
                                <small className="see-all-live">See All</small>
                                <i className="fas fa-arrow-alt-circle-down see-all-live-ico "></i>
                            </button>
                        </Link>

                    </div>   

                </div>

                <div className="accordion right-col-box-home-r mt-3">

                    <div className="live-text-sln">Learning Sessions</div> 

                    <div className="Live-S-Nav d-flex" id="headingTwo">

                        <Learn/>
                        
                       <Link to='/learning-sessions'>
                            <button className="Live-RS-btn" style={{backgroundColor:getColor('/learning-sessions')}}>
                                <small className="see-all-live">See All</small>
                                <i className="fas fa-arrow-alt-circle-down see-all-live-ico "></i>
                            </button>
                        </Link>

                    </div>   

                </div>

                <div className="accordion right-col-box-home-r mt-3">

                    <div className="live-text-sln">Upcoming Live</div> 

                    <div className="Live-S-Nav d-flex" id="headingTwo">

                        <UpLive/>

                        <Link to='/upcoming-live'>
                            <button className="Live-RS-btn" style={{backgroundColor:getColor('/upcoming-live')}}>
                                <small className="see-all-live">See All</small>
                                <i className="fas fa-arrow-alt-circle-down see-all-live-ico "></i>
                            </button>
                        </Link>

                    </div>   

                </div>

                <div className="accordion right-col-box-home-r mt-3">

                    <div className="live-text-sln">Upcoming Auditions</div> 

                    <div className="Live-S-Nav d-flex" id="headingTwo">

                        <UpAuditions/>

                       <Link to='/upcoming-auditions'>
                            <button className="Live-RS-btn" style={{backgroundColor:getColor('/upcoming-auditions')}}>
                                <small className="see-all-live">See All</small>
                                <i className="fas fa-arrow-alt-circle-down see-all-live-ico "></i>
                            </button>
                        </Link>

                    </div>   

                </div>

            </div>

        </>
    )
}
export default withRouter(RightSidebar);