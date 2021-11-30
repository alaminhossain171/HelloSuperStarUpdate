import React from 'react'
export default function UpLiveContent ({UpcLive}) {
    return (
        <>
            <div class="column">
                <div className="column-bg">
                    <img src={UpcLive.profilePicture} className="Live-RS-img" alt={UpcLive.profilePicture} />
                    <span className="Live-RS-Name">{UpcLive.username}</span>
                </div>
            </div>
        </>
    )
}
