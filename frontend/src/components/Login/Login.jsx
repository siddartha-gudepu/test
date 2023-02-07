import React from "react";
import Logo from "../../img/logo.jpg";
import "./Login.css";
const Login=()=>{
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
                        <span style={{fontSize:"12px"}}>Don't have a account.SignUp!</span>
                        <button className='button infobutton' type="submit">Login</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login;