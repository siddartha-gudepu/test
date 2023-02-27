import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import "./RightSide.css";
import Topics from "../Topics/Topics";
import ShareModel from "../ShareModel/ShareModel";
import ProfileModel from "../ProfileModel/ProfileModel";
import Settings from "../Settings/Settings";

const RightSide=()=>{
    const [modelOpened,setModelOpened]=useState(false);
    const [topic,settopic]=useState(true);
    return(
        <div className="RightSide">
            <div className="navIcons">
                <Link to="/home" className="home"><i class="fa-solid fa-house nav" ></i></Link>
                <i class="fa-solid fa-gear nav" onClick={()=>settopic(false)}></i>
            </div>
            {!topic && <Settings topic={topic} settopic={settopic}/>}
            {topic && <Topics/>}
            <button className="r-button" onClick={()=>setModelOpened(true)}>Ask</button>
            <ShareModel modelOpened={modelOpened} setModelOpened={setModelOpened} />
        </div>
    )
}

export default RightSide;