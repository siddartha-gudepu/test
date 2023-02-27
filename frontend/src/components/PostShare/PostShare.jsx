import React from "react";
import ProfileImage from '../../img/img1.png';
import "./PostShare.css";
const PostShare=()=>{
    return (
        <div className="PostShare">
            <img src={ProfileImage} alt="" />
            <div className="Search">

                <input type="text" placeholder="What's happening" />

            </div>
            <button className=" button fc-button">Search</button> 
        </div>
    )
}

export default PostShare;