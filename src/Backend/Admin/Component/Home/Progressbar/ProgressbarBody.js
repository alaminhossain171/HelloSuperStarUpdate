import React from 'react'
import SideNavbar from '../../Siderbar/SideNavbar'
import ProgressbarContent from './ProgressbarContent'

const ProgressbarBody = () => {
    return (
        <>
            <SideNavbar/>

            <div className="content ">
                <ProgressbarContent/>
            </div>

        </>
    )
}

export default ProgressbarBody
