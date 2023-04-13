import React from 'react';
import Posts from '../Posts/Posts';
import PostShare from '../PostShare/PostShare';
import './PostSide.css';

const PostSide=(props)=>{
    return(
        <div className='PostSide'>
            <PostShare/>
            <Posts/>
        </div>
    )
}

export default PostSide;