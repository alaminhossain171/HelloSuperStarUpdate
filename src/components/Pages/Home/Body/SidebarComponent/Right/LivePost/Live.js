import React from 'react'
import { Users } from '../../../../../../../DummyData';
import LiveContent from './LiveContent';

const Live = () => {
    console.log(Users);
    return (
        <>
            {Users.map((u) => (
                <LiveContent key={u.id} user={u} />
            ))}
        </>
    )
}

export default Live
