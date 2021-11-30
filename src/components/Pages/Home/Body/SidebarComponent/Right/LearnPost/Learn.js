import React from 'react'
import { Users } from '../../../../../../../DummyData';
import LearnContent from './LearnContent';

const Learn = () => {
    console.log(Users);
    return (
        <>
            {Users.map((u) => (
                <LearnContent key={u.id} user={u} />
            ))}
        </>
    )
}

export default Learn
