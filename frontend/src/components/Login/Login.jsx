import React, { useState } from "react";
import {Link} from "react-router-dom";
import Logo from "../../img/logo.jpg";
import "./Login.css";
import axios from "axios";
import { useCookies } from "react-cookie";
const Login=()=>{
    const [data,setdata]=useState({password:"",username:""})
    const handleChange=(e)=>{
        setdata({...data,[e.target.name]:e.target.value});
        console.log(data);
    } 
     
    const handleLogin=(e)=>{
        e.preventDefault();
            axios.post("http://localhost:5000/login",data).then(function(response){
                console.log(response.data);
                // setloguser(data);
            }).catch((err)=>{
                console.log(err);
            })
    }
    return(
        <div className='Login'>
            <div className='a-left'>
                <img src={Logo}/>
                <div className='webname'>
                    <h1>KEY</h1>
                    <h6>Know everything you want.</h6>
                </div>
            </div>
            <div className='a-right'>
                <form className='infoForm authForm' onSubmit={handleLogin}>
                    <h3 className='auth'>Login</h3>
                    <div><input type="text" placeholder='Username' className='infoinput' name="username" onChange={handleChange}/></div>
                    <div>
                        <input type="text" placeholder='Password' className='infoinput' name='password'onChange={handleChange}/>
                    </div>
                    <div>
                        <span style={{fontSize:"12px"}}>Don't have a account. SignUp!</span>
                        <button className='button infobutton' type="submit">Login</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login;