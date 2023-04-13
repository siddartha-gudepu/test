import React, { useState } from "react";
import "./Posts.css";
import { PostsData } from "../../Data/PostData";
import Post from "../Post/Post";

const Posts=(props)=>{
    return(
        <div className="Posts">
            {props.post.map((post,id)=>{
                return <Post data={post} id={id} />
            })}
        </div>
    )
}

export default Posts