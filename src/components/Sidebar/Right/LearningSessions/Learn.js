import React from 'react'
import { Learns } from '../../../../DummyData'
import LearnContent from './LearnContent'

const Learn = () => {
    console.log(Learns);
    const first2=Learns.slice(0,2);
    console.log(first2);
    return (
        <>
            {first2.map((l) => (
                <LearnContent key={l.id} leran={l} />
            ))}
        </>
    )
}

export default Learn
