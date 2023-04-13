import React, { useEffect } from "react";
import "./College.css";
import PostSide from "../../components/PostSide/PostSide";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import RightSide from "../../components/RightSide/RightSide";
import axios from "axios";

const College=()=>{
    useEffect(async()=>{
        try{
            await axios.get("/getPost").then(function(response){
                console.log(response.data);
            })
        }catch(err){
            console.log(err);
        }
    })
    return(
        <div className="College">
            <ProfileLeft/>
            <PostSide/>
            <RightSide/>
        </div>
    )
}

export default College;