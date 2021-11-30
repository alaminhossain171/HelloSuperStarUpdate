import React from 'react'
import SideNavbar from '../../Siderbar/SideNavbar'
import LiveVideoContent from './LiveVideoContent'

const LiveBody = () => {
    return (
        <>
            <SideNavbar/>

            <div className="content ">
                <LiveVideoContent/>
            </div>

        </>
    )
}

export default LiveBody
