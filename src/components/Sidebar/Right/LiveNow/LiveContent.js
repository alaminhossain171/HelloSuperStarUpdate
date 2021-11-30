import React from 'react'
export default function LiveContent ({Live}) {
    return (
        <>
            <div class="column">
                <div className="column-bg">
                    <img src={Live.profilePicture} className="Live-RS-img" alt={Live.profilePicture} />
                    <span className="Live-RS-Name">{Live.username}</span>

                    <div class="ContentLight">
                        .
                    </div>

                </div>
            </div>
        </>
    )
}
