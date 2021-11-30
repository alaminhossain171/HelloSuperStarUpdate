import React from 'react'
import  {Users} from '../../../../DummyData'
import EnrollContent from './EnrollContent';

const Enroll = () => {
    console.log(Users);
    return (
        <>
            {Users.map((e) => (
                <EnrollContent key={e.id} user={e} />
            ))}
        </>
    )
}

export default Enroll
