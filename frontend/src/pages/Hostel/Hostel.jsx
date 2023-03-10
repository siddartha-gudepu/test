import React from "react";
import { useState,useEffect } from "react";
import "./Hostel.css";
import PostSide from "../../components/PostSide/PostSide";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import RightSide from "../../components/RightSide/RightSide";

const Hostel=()=>{
    const [hostelposts,setpost]=useState(null);
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
        <div className="Hostel">
            <ProfileLeft/>
            <PostSide posts={hostelposts}/>
            <RightSide/>
        </div>
    )
}

export default Hostel;