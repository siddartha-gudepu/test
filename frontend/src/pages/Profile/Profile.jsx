import React, { useEffect, useState } from "react";
import RightSide from "../../components/RightSide/RightSide";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import ProfileSide from "../../components/ProfileSide/ProfileSide";
import "./Profile.css";
import axios from "axios";
const Profile=()=>{
    const [details,setdetails]=useState(null);
    useEffect(()=>{
        axios.get("http://localhost:5000/user/641ff2f1be3a463df8fd9a53").then(function(response){
            console.log(response.data);
        }).catch((err)=>{
            console.log(err);
        })
    })
    return(
        <div className="Profile">
            <ProfileLeft/>
            <ProfileSide/>
            <RightSide/>
        </div>
    )
}

export default Profile;