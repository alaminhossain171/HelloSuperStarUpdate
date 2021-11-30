import React from 'react'
import { Users } from '../../../../../DummyData'
import PostContent from './PostContent'

const Post = () => {
    console.log(Users);
    return (
        <>
            {Users.map((u) => (
                <PostContent key={u.id} user={u} />
            ))}
        </>
    )
}

export default Post
