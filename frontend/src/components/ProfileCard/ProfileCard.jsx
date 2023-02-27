import React from "react";
import profile from "../../img/img1.png"
import "./ProfileCard.css";
const ProfileCard=()=>{
    return (
        <div className="ProfileCard">
            <div className="ProfileImage">
                <img src={profile} className="ProfileImg"/>
            </div>
            <div className="ProfileName">
                <span>Bunny</span>
                <span>student</span>
                <span>from malyala</span>
                <span>study at nitap</span>
            </div>
            <div className="followStatus">
                <hr/>
                <div>
                    <div className="follow">
                        <span>21</span>
                        <span>Following</span>
                    </div>
                    <div className="vl"></div>
                    <div className="follow">
                        <span>21</span>
                        <span>Followers</span>
                    </div>
                </div>
                <hr/>
            </div>
        </div>
    )

}

export default ProfileCard;