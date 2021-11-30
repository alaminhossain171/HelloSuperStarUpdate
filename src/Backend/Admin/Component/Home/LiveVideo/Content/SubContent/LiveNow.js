import React from 'react'
import ReactPlayer from "react-player";
import LVModal from '../Modal';

const LiveNow = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <div className="card ad-card">
        <div id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body row">
                <div className="col-md-6 accordion-item-liveVideo">
                    <span className="accordion-item-liveVideo-span">Live Chat Profile</span>
                    <ReactPlayer url="https://youtu.be/3jtqM_EsUCQ" className="card accordion-item-liveVideo-card"
                        playing={false} volume={1} onReady={()=> console.log("ready now")}
                        />

                </div>
                <div className="col-md-6 accordion-item-liveVideo">

                    <p className="live-vi-ad-text"><b>Instructions</b></p>
                    <p className="live-vi-ad-text">Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s <br></br> Lorem Ipsum is simply dummy text of the
                        printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        <br></br> Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's</p>

                    <p className="live-vi-ad-text"><button className="live-ad-btn-s btn btn-warning" variant="primary" onClick={()=>
                            setModalShow(true)}>Edit</button>
                    </p>

                    <LVModal show={modalShow} onHide={()=> setModalShow(false)} />

                </div>

            </div>
        </div>
    </div>
        </>
    )
}

export default LiveNow
