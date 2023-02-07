import React from "react";
import "./Post.css";

const Post=({data})=>{
    return(
        <div className="Post">
            <h1>{data.ques}</h1>
            <div className="postReact">
                {data.like?<i class="fa-solid fa-heart interact"></i>:<i class="fa-regular fa-heart interact"></i>}
                <i class="fa-regular fa-comments interact"></i>
            </div>
            <span style={{color:"var(--grey)",fontSize:"12px"}}>{data.likes} likes</span>
            <div className="detail">
                <span><b>{data.name}</b></span>
                <span>{data.desc}</span>
            </div>
        </div>
    )
}

export default Post;