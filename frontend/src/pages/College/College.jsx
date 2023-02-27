import React from "react";
import "./College.css";
import PostSide from "../../components/PostSide/PostSide";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import RightSide from "../../components/RightSide/RightSide";

const College=()=>{
    return(
        <div className="College">
            <ProfileLeft/>
            <PostSide/>
            <RightSide/>
        </div>
    )
}

export default College;