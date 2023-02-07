import Logo from "../../img/logo.jpg";
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
                    <div><input type="text" placeholder='Username' className='infoinput' name="username"/></div>
                    <div><input type="text" placeholder='Email' className='infoinput' name="username"/></div>
                    <div>
                        <input type="text" placeholder='Password' className='infoinput' name='password'/>
                        <input type="text" placeholder='Confirm Password' className='infoinput' name='confirmpassword'/>
                    </div>
                    <div>
                        <span style={{fontSize:"12px"}}>Already have an account.Login!</span>
                    </div>
                    <button className='button infobutton' type="submit">SignUp</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;