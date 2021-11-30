import React from 'react'
import { UpLives } from '../../../../DummyData'
import UpLiveContent from './UpLiveContent';

const UpLive = () => {
    console.log(UpLives);
    const first2=UpLives.slice(0,2);
    console.log(first2);

    return (
        <>
            {first2.map((uli) => (
            <UpLiveContent key={uli.id} UpcLive={uli} name='check' />
            ))}
        </>
    )
}

export default UpLive
