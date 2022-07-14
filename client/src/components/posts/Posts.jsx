import React from 'react'
import Post from '../post/Post'
import './posts.css'
export default function Posts({post}) {
    return (
        <div className='posts'>
            {post.map((ele,indx)=>(
                <Post key={indx} post={ele}/>
            ))}
        </div>
    )
}
