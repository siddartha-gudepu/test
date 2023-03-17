import React from "react";
import "./Home.css";
import PostSide from "../../components/PostSide/PostSide";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import RightSide from "../../components/RightSide/RightSide";
import axios from "axios";
import { useEffect } from "react";

const Home=()=>{
    useEffect(async ()=>{
        try{
            await axios.get("/getPost").then(function(response){
                console.log(response.data);
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