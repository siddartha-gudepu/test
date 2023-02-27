import React from "react";
import "./Coding.css";
import PostSide from "../../components/PostSide/PostSide";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import RightSide from "../../components/RightSide/RightSide";

const Coding=()=>{
    return(
        <div className="Coding">
            <ProfileLeft/>
            <PostSide/>
            <RightSide/>
        </div>
    )
}

export default Coding;