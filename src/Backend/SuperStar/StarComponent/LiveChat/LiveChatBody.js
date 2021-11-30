import React from 'react'
import SideNavbar from '../../Siderbar/SideNavbar'
import LiveChatContent from './LiveChatContent'

const LiveChatBody = () => {
return (
<>
    <SideNavbar />

    

    <div className="content ">
        <LiveChatContent/>
    </div>
</>
)
}

export default LiveChatBody