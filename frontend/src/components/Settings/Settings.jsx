import React from "react";
import "./Settings.css";
import {Link} from "react-router-dom";
import { useState } from "react";
import Topics from "../Topics/Topics";
const Settings=(props)=>{
    return(
        <div className="Settings">
            <h3><i class="fa-sharp fa-solid fa-arrow-left sets1" onClick={()=>props.settopic(true)}></i>Settings</h3>
            <div className="set">
                <Link to="/"><button className="s-button">Logout<i class="fa-solid fa-right-from-bracket sets"></i></button></Link>
            </div>
            <div className="set">
                <Link to="/"><button className="s-button">delete account<i class="fa-solid fa-user-slash sets"></i></button></Link>
            </div>
            <div className="set">
                <button className="s-button">change password<i class="fa-sharp fa-solid fa-key sets"></i></button>
            </div>
        </div>
    )
}

export default Settings;



