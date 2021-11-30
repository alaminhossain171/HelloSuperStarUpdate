import React from 'react'

export default function Online({user}) {
    return (
        <>
            <div className="accordion-header chatListname" id="headingTwo">
            
                <span> 
                    <img src={user.profilePicture} alt="" className="SidebarStarListImage"/>
                </span>
                
                <span className="OnlineGreen"><i class="fas fa-circle"></i></span>
                <span className='chatName'>{user.username}</span>
               
            </div>  
        </>
    )
}

