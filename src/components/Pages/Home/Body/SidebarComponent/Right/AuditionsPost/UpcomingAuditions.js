import React from 'react'
import { Users } from '../../../../../../../DummyData';
import AuditionsContent from './UpcomingAuditionsContent';


const UpcomingAuditions = () => {
    console.log(Users);
    return (
        <>
            {Users.map((e) => (
                <AuditionsContent key={e.id} user={e} />
            ))}
        </>
    )
}

export default UpcomingAuditions
