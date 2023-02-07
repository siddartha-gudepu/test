import React from "react";
import "./LogoSearch.css";
import Logo from "../../img/logo.jpg";
const LogoSearch=()=>{
    return(
        <div className="LogoSearch">
            <img src={Logo} alt="" />
            <div className="Search">
                <input type="text" placeholder="#Explore"/>
                <div className="s-icon">
                 <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </div>
    )
}

export default LogoSearch;