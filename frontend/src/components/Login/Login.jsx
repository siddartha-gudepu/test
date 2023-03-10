import React from "react";
import {Link} from "react-router-dom";
import Logo from "../../img/logo.jpg";
import "./Login.css";
const axios=require('axios');
const Login=()=>{
    const handlelog=async(e)=>{
        e.preventDefault();
        try{
            await axios.post("/login",
                {username:e.target.username,password:e.target.value},
                {
                    headers:{'Content-Type':'application/json'},
                    withCredentials:true
                }
            ).then(function(response){
                console.log(response.data);
            })
        }catch(err){
            console.log(err);
        }

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
                <form className='infoForm authForm'>
                    <h3 className='auth'>Login</h3>
                    <div><input type="text" placeholder='Username' className='infoinput' name="username"/></div>
                    <div>
                        <input type="text" placeholder='Password' className='infoinput' name='password'/>
                    </div>
                    <div>
                        <span style={{fontSize:"12px"}}>Don't have a account.<Link to="/signup" className="sign">SignUp!</Link></span>
                        <Link to="/home"><button className='button infobutton logbutton' type="submit">Login</button></Link>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login;