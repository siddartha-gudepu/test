import React from "react";
import "./Post.css";
import pro from "../../img/img1.png";

const Post=({data})=>{
    return(
        <div className="Post">
            <div className="use">
                <img src={pro} alt="" />
                <span><b>{data.name}</b></span>
            </div>
            <h1>{data.ques}</h1>
            <div className="postReact">
                {data.like?<i class="fa-solid fa-heart interact"></i>:<i class="fa-regular fa-heart interact"></i>}
                <i class="fa-regular fa-comments interact"></i>
            </div>
            <span style={{color:"var(--grey)",fontSize:"12px"}}>{data.likes} likes</span>
            <div className="detail">

                <span>{data.desc}</span>
            </div>
            <div className="comment">
                <img src={pro} alt="" />
                <input placeholder="give your answer"/>
                <i class="fi fi-rr-paper-plane icomment"></i>
            </div>
        </div>
    )
}

export default Post;