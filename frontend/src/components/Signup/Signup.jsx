import Logo from "../../img/logo.jpg";
import {Link} from "react-router-dom";
import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import {useCookies} from "react-cookie";

const Signup=()=>{
    // const [userdata,setuser,removeuser]=useCookies({});
    const [data,setdata]=useState({firstname:'',lastname:"",email:"",password:"",username:"",confirmpassword:""})
    const handleChange=(e)=>{
        setdata({...data,[e.target.name]:e.target.value});
        console.log(data);
    }    

    const handleSignup = (e) => {
        e.preventDefault();
        
        const uppercaseRegex = /(?=.*[A-Z])/;
        const numberRegex = /(?=.*\d)/;
        const specialCharRegex = /(?=.*[!@#$%^&*()\-_=+{};:,<.>/?[\]`~|\\])/;
        
        if (data.password === data.confirmpassword) {
          if (
            data.password.length >= 6 &&
            uppercaseRegex.test(data.password) &&
            numberRegex.test(data.password) &&
            specialCharRegex.test(data.password)
          ) {
            axios.post("http://localhost:5000/signup", data)
              .then(function(response) {
                console.log("Request sent");
                console.log(response.data);
                // setuser(response.data);
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            console.log("Password must be at least 6 characters with at least 1 uppercase, 1 numerical, and 1 special character");
          }
        } else {
          console.log("Confirm password is wrong");
        }
      };
      

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
                <form className='infoForm authForm' onSubmit={handleSignup}>
                    <h3 className='auth'>Sign Up</h3>
                    <div>
                        <input type="text" placeholder='Firstname' className='infoinput' name="firstname" onChange={handleChange}/>
                        <input type="text" placeholder='Lastname' className='infoinput' name="lastname" onChange={handleChange}/>
                    </div>
                    <div><input type="text" placeholder='Username' className='infoinput' name="username" onChange={handleChange}/></div>
                    <div><input type="email" placeholder='Email' className='infoinput' name="email" onChange={handleChange}/></div>
                    <div>
                        <input type="password" placeholder='Password' className='infoinput' name='password'onChange={handleChange}/>
                        <input type="password" placeholder='Confirm Password' className='infoinput' name='confirmpassword' onChange={handleChange}/>
                    </div>
                    <div>
                        <span style={{fontSize:"12px"}}>Already have an account?. Login!</span>
                    </div>
                    <button className='button infobutton' type="submit">SignUp</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;