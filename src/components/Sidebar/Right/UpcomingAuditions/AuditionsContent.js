import React from 'react'
export default function AuditionsContent ({Audition}) {
    return (
        <>
            <div class="column">
                <div className="column-bg">
                <img src={Audition.profilePicture} className="Live-RS-img" alt={Audition.profilePicture} />
                <span className="Live-RS-Name">{Audition.username}</span>
                </div>
            </div>
        </>
    )
}

