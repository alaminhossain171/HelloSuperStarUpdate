import React from 'react'
import { Users } from '../../../../../../../DummyData';
import UpcomingLiveContent from './UpcomingLiveContent';


const UpcomingLive = () => {
    console.log(Users);
    return (
        <>
            {Users.map((e) => (
                <UpcomingLiveContent key={e.id} user={e} />
            ))}
        </>
    )
}

export default UpcomingLive
