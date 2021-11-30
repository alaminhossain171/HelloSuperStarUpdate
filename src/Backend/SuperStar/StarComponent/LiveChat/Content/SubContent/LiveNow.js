import React from 'react'
import ReactPlayer from "react-player";
import RegisterUser from '../../../../../Admin/Component/RegisteredUser/RegisterUser';
import LVModal from '../Modal';

const LiveNow = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <div className="card ad-card">
        <div id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body row">
             <RegisterUser />
            </div>
        </div>
    </div>
        </>
    )
}

export default LiveNow
