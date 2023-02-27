import Logo from "../../img/logo.jpg";
import {Link} from "react-router-dom";
import React from "react";
import "./Signup.css";
const Signup=()=>{
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
                <form className='infoForm authForm'>
                    <h3 className='auth'>Sign Up</h3>
                    <div>
                        <input type="text" placeholder='Firstname' className='infoinput' name="username"/>
                        <input type="text" placeholder='Lastname' className='infoinput' name="username"/>
                    </div>
                    <div><input type="text" placeholder='Username' className='infoinput' name="username"/></div>
                    <div><input type="email" placeholder='Email' className='infoinput' name="username"/></div>
                    <div>
                        <input type="password" placeholder='Password' className='infoinput' name='password'/>
                        <input type="password" placeholder='Confirm Password' className='infoinput' name='confirmpassword'/>
                    </div>
                    <div>
                        <span style={{fontSize:"12px"}}>Already have an account.<Link to="/" className="login">Login!</Link></span>
                    </div>
                    <Link to="/home"><button className='button infobutton' type="submit">SignUp</button></Link>
                </form>
            </div>
        </div>
    )
}

export default Signup;