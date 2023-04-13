import React from 'react';
import Posts from '../Posts/Posts';
import PostShare from '../PostShare/PostShare';
import './PostSide.css';

const PostSide=(props)=>{
    return(
        <div className='PostSide'>
            <PostShare/>
            <Posts post={props.post}/>
        </div>
    )
}

export default PostSide;