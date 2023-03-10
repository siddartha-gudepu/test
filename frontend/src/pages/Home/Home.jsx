import React, { useEffect, useState } from "react";
import "./Home.css";
import PostSide from "../../components/PostSide/PostSide";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import RightSide from "../../components/RightSide/RightSide";

const Home=()=>{
    const [posts,setpost]=useState(null);
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
        <div className="Home">
            <ProfileLeft/>
            <PostSide/>
            <RightSide/>
        </div>
    )
}

export default Home;