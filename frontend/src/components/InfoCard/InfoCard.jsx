import React,{useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import "./InfoCard.css";
import ProfileModel from '../ProfileModel/ProfileModel';
import Cover from "../../img/cover.png";
import Profile from '../../img/profileimg.jpg';
const InfoCard=()=>{
  const [modelOpened,setModelOpened]=useState(false)
  return(
    <div className="InfoCard">
 
      <div className="infoHead">

        <h4>Your Info</h4>
        <div><i class="fa-solid fa-pencil" onClick={()=>setModelOpened(true)}></i>
          <ProfileModel modelOpened={modelOpened} setModelOpened={setModelOpened}/>
        </div>

      </div>
      <div className="info">
        <span><b>Status </b></span>
        <span>single</span>
      </div>
      <div className="info">
        <span><b>Lives in </b></span>
        <span>Malyala</span>
      </div>
      <div className="info">
        <span><b>Studies at </b></span>
        <span>NITAP</span>
      </div>
      <Link to="/profile" className='profile'><button className="button logout-button">view profile</button></Link>
    </div>
  )
}

export default InfoCard