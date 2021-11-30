import React from 'react'
import SideNavbar from '../../Sidebar/SideNavbar'
import AMEventsContent from './AMEventsContent'

const AMEventsBody = () => {
return (
<>
    <SideNavbar/>

    <div className="content ">
        <AMEventsContent/>
    </div>

</>
)
}

export default AMEventsBody