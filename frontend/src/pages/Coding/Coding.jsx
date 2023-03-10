import React from "react";
import { useState,useEffect } from "react";
import "./Coding.css";
import PostSide from "../../components/PostSide/PostSide";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import RightSide from "../../components/RightSide/RightSide";

const Coding=()=>{
    const [codingposts,setpost]=useState(null);
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
        <div className="Coding">
            <ProfileLeft/>
            <PostSide posts={codingposts}/>
            <RightSide/>
        </div>
    )
}

export default Coding;