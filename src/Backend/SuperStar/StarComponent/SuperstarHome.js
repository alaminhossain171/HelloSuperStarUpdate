import React from 'react'
import StarSideNavbar from './Siderbar/StarSideNavbar';
import StarLiveContent from "./LiveChat/LiveChatContent";

const SuperstarHome = () => {
    return (
        <>
            <StarSideNavbar/>
            <div className="content">
                <StarLiveContent />
            </div>
        </>
    )
}

export default SuperstarHome
