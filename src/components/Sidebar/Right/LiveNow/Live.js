import React from 'react'
import { Lives } from '../../../../DummyData'
import LiveContent from './LiveContent'

const Live = () => {
    console.log(Lives);
    const first2=Lives.slice(0,2);
    console.log(first2);

    return (
        <>
            {first2.map((l) => (
            <LiveContent key={l.id} Live={l} name='check' />
            ))}
        </>
    )
}

export default Live
