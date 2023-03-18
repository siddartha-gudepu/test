import React, { useEffect, useState } from "react";
import "./Home.css";
import PostSide from "../../components/PostSide/PostSide";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import RightSide from "../../components/RightSide/RightSide";
import axios from "axios";

const Home=()=>{
    const [posts,setpost]=useState(null);
    useEffect(()=>{
        axios.get("http://localhost:5000/home").then(function(response){
            console.log(response.data);
            setpost(response.data)
        }).catch((err)=>{
            console.log(err);
        })
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