import React, { useState } from "react";
import "./Home.css";
import PostSide from "../../components/PostSide/PostSide";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import RightSide from "../../components/RightSide/RightSide";
import axios from "axios";
import { useEffect } from "react";

const Home=()=>{
    const [post,setpost]=useState(null);
    useEffect(()=>{

        const getData = async () => {
            const res = await axios.get("http://localhost:5000/post/641ff2f1be3a463df8fd9a53/timeline")
            console.log(res.data)
        }

        getData()
    }, [])
    return(
        <div className="Home">
            <ProfileLeft/>
            <PostSide/>
            <RightSide/>
        </div>
    )
}

export default Home;