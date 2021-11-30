import React from 'react'
import LiveChatProfile from '../../LiveChatProfile/LiveChatProfile'
import SideNavbar from '../../Siderbar/SideNavbar'
const LiveChatConfirmStatus = () => {
    return (
        <>
        
        <SideNavbar />

        <div className="container">
        <div className="row">

            <div className="col-md-3 align-items-center justify-content-center ">
                <div className="card ad-card">
                    <div className="card-body  align-items-center">
                        <center>
                            <tr>
                                <td className="ad-card-td">
                                    <img src="./../../../../images/Normal-User/star.png" className="ad-card-img-top"
                                        alt="..." />
                                </td>
                                <td className="ad-card-td">
                                    <small className="ad-card-small">00</small>
                                </td>
                            </tr>
                        </center>
                    </div>
                    <button className="card-footer ad-card-footer" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Live Now
                    </button>
                </div>
            </div>

            <div className="col-md-3 align-items-center justify-content-center ">
                <div className="card ad-card">
                    <div className="card-body  align-items-center">
                        <center>
                            <tr>
                                <td className="ad-card-td">
                                    <img src="./../../../../images/Normal-User/star.png" className="ad-card-img-top"
                                        alt="..." />
                                </td>
                                <td className="ad-card-td">
                                    <small className="ad-card-small">00</small>
                                </td>
                            </tr>
                        </center>
                    </div>
                    <button className="card-footer ad-card-footer" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Pendding Session
                    </button>
                </div>
            </div>

            <div className="col-md-3 align-items-center justify-content-center ">
                <div className="card ad-card">
                    <div className="card-body  align-items-center">
                        <center>
                            <tr>
                                <td className="ad-card-td">
                                    <img src="./../../../../images/Normal-User/star.png" className="ad-card-img-top"
                                        alt="..." />
                                </td>
                                <td className="ad-card-td">
                                    <small className="ad-card-small">00</small>
                                </td>
                            </tr>
                        </center>
                    </div>
                    <button className="card-footer ad-card-footer" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Add Session</button>
                </div>
            </div>

        </div>
    </div> <br /><br />

    <div className="accordion container" id="accordionExample">
    <LiveChatProfile />
    </div>
        </>
    )
}

export default LiveChatConfirmStatus
