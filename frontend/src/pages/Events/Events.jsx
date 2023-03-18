import React from "react";
import { useState,useEffect } from "react";
import "./Events.css";
import PostSide from "../../components/PostSide/PostSide";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import RightSide from "../../components/RightSide/RightSide";
import axios from "axios";

const Events=()=>{
    const [eventposts,setpost]=useState(null);
    useEffect(()=>{
        axios.get("http://localhost:5000/event").then(function(response){
            console.log(response.data);
            setpost(response.data)
        }).catch((err)=>{
            console.log(err);
        })
    })
    return(
        <div className="Events">
            <ProfileLeft/>
            <PostSide posts={eventposts}/>
            <RightSide/>
        </div>
    )
}

export default Events;