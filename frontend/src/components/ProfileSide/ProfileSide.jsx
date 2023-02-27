import React from "react";
import Posts from "../Posts/Posts";
import PostShare from "../PostShare/PostShare";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./ProfileSide.css";

const ProfileSide=()=>{
    return(
        <div className="ProfileSide">
            <PostShare/>
            <ProfileCard/>
            <Posts/>
        </div>
    )
}

export default ProfileSide;
