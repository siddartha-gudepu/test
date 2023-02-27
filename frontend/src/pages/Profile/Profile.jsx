import React from "react";
import RightSide from "../../components/RightSide/RightSide";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import ProfileSide from "../../components/ProfileSide/ProfileSide";
import "./Profile.css";
const Profile=()=>{
    return(
        <div className="Profile">
            <ProfileLeft/>
            <ProfileSide/>
            <RightSide/>
        </div>
    )
}

export default Profile;