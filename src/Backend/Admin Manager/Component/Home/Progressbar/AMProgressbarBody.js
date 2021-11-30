import React from 'react'
import ProgressbarContent from './AMProgressbarContent'
import SideNavbar from '../../Sidebar/SideNavbar'

const AMProgressbarBody = () => {
    return (
        <>
            <SideNavbar/>

            <div className="content ">
                <ProgressbarContent/>
            </div>

        </>
    )
}

export default AMProgressbarBody
