import Logo from "../../img/logo.jpg";
import {Link} from "react-router-dom";
import React from "react";
import { useState } from "react";
import "./Signup.css";
import axios from 'axios';
const Signup=()=>{
    const [data,setdata]=useState({firstname:"",lastname:"",username:"",email:"",password:"",confirmpassword:""});

    const handlechange=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        if(data.password===data.confirmpassword){
            e.preventDefault();
            axios.post("http://localhost:5000/signup",
                {data}
            ).then(function(response){
                console.log(response.data)
            }).catch((err)=>{
            console.log(err);})
        }else{
            setpass(false);
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
                        <input type="text" placeholder='Firstname' className='infoinput' name="firstname" onChange={handlechange}/>
                        <input type="text" placeholder='Lastname' className='infoinput' name="lastname" onChange={handlechange}/>
                    </div>
                    <div><input type="text" placeholder='Username' className='infoinput' name="username" onChange={handlechange}/></div>
                    <div>
                        <input type="email" placeholder='Email' className='infoinput' name="email" onChange={handlechange}/>
                        
                    </div>
                    <p className="check">{error}</p>
                    
                    <div>
                        
                        <input type="password" placeholder='Password' className='infoinput' name='password' onChange={handlechange}/>
                        <input type="password" placeholder='Confirm Password' className='infoinput' name='confirmpassword' onChange={handlechange}/>
                    </div>
                    <span style={{display: pass ? none : block ,color:red}}>*confirm password is wrong</span>
                    <div>
                        <span style={{fontSize:"12px"}}>Already have an account.<Link to="/" className="login">Login!</Link></span>
                    </div>
                    <Link to='/home'><button className='button infobutton signbutton' type="submit">SignUp</button></Link>
                </form>
            </div>
        </div>
    )
}

export default Signup;