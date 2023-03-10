import Logo from "../../img/logo.jpg";
import {Link} from "react-router-dom";
import React from "react";
import { useState } from "react";
import "./Signup.css";
const axios= require('axios');
const Signup=()=>{
    [user,setuser]=useState("");
    [pass,setpass]=useState("");

    // const checkPass=(p)=>{
    //     setPass(p.target.value);
    //     if(regex1.test(pass)==false){
    //         set
    //     }
    // }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            await axios.post("/signup",
                {firstname:e.target.firstname,lastname:e.target.lastname,userName:e.target.userName,email:e.target.email,password:e.target.password},
                {
                    headers:{'Content-Type':'application/json'},
                    withCredentials:true
                }
            ).then(function(response){
                console.log(response.data)
            })
        }catch(err){
            console.log(error);
        }
    }

    return (
        <div className='Signup'>
            <div className='a-left'>
                <img src={Logo}/>
                <div className='webname'>
                    <h1>KEY</h1>
                    <h6>Know everything you want.</h6>
                </div>
            </div>
            <div className='a-right'>
                <form className='infoForm authForm' onSubmit={handleSubmit}>
                    <h3 className='auth'>Sign Up</h3>
                    <div>
                        <input type="text" placeholder='Firstname' className='infoinput' name="firstname"/>
                        <input type="text" placeholder='Lastname' className='infoinput' name="lastname"/>
                    </div>
                    <div><input type="text" placeholder='Username' className='infoinput' name="userName"/></div>
                    <div>
                        <input type="email" placeholder='Email' className='infoinput' name="email"/>
                        
                    </div>
                    <p className="check">{error}</p>
                    
                    <div>
                        
                        <input type="password" placeholder='Password' className='infoinput' name='password'/>
                        <input type="password" placeholder='Confirm Password' className='infoinput' name='confirmpassword'/>
                    </div>
                    <div>
                        <span style={{fontSize:"12px"}}>Already have an account.<Link to="/" className="login">Login!</Link></span>
                    </div>
                    <Link to={next}><button className='button infobutton signbutton' type="submit" onClick={submit}>SignUp</button></Link>
                </form>
            </div>
        </div>
    )
}

export default Signup;