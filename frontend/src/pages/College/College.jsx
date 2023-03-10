import React, { useState,useEffect } from "react";
import "./College.css";
import PostSide from "../../components/PostSide/PostSide";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import RightSide from "../../components/RightSide/RightSide";

const College=()=>{
    const [collegeposts,setpost]=useState(null);
    useEffect(()=>{
        try{
            axios.get("/").then((response)=>{
                setpost(response.data);
            })
        }catch(err){
            console.log(err);
        }
    })
    return(
        <div className="College">
            <ProfileLeft/>
            <PostSide posts={collegeposts}/>
            <RightSide/>
        </div>
    )
}

export default College;