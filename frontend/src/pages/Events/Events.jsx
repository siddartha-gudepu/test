import React from "react";
import { useState,useEffect } from "react";
import "./Events.css";
import PostSide from "../../components/PostSide/PostSide";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import RightSide from "../../components/RightSide/RightSide";

const Events=()=>{
    const [eventposts,setpost]=useState(null);
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
        <div className="Events">
            <ProfileLeft/>
            <PostSide posts={eventposts}/>
            <RightSide/>
        </div>
    )
}

export default Events;