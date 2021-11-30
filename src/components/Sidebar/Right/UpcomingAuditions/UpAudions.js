import React from 'react'
import { Auditions } from '../../../../DummyData';
import AuditionsContent from './AuditionsContent';

const UpAuditions = () => {
    console.log(Auditions);
    const first2=Auditions.slice(0,2);
    console.log(first2);

    return (
        <>
      
            {first2.map((a) => (
            <AuditionsContent key={a.id} Audition={a} name='check' />
            ))}
        </>
    )
}

export default UpAuditions
