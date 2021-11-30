import React from 'react'
import AddSession from './SubContent/AddSession'
import LiveChat from './SubContent/LiveNow'
import PendingSessions from './SubContent/PendingSessions'


const SubContent = () => {
   
return (
    <>
    
        <LiveChat/>
        <PendingSessions/>
        <AddSession/>
        
    </>
)
}

export default SubContent