import React from 'react'

export default function LearnContent({leran})  {
    return (
        <>
            <div class="column">
                <div className="column-bg">
                    <img src={leran.profilePicture} className="Live-RS-img" alt={leran.profilePicture} />
                    <span className="Live-RS-Name">{leran.username}</span>

                    <div class="ContentLight">
                        .
                    </div>

                </div>
            </div>
        </>
    )
}

