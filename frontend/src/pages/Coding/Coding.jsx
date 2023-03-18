import React from "react";
import { useState,useEffect } from "react";
import "./Coding.css";
import PostSide from "../../components/PostSide/PostSide";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import RightSide from "../../components/RightSide/RightSide";
import axios from "axios";
const Coding=()=>{
    const [codingposts,setpost]=useState(null);
    useEffect(()=>{
        axios.get("http://localhost:5000/coding").then(function(response){
            console.log(response.data);
            setpost(response.data)
        }).catch((err)=>{
            console.log(err);
        })
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