import Logo from '../../img/logo.jpg'
import './Auth.css';
import { useState } from 'react'
const Auth=()=>{
    const [login,setLogin]=useState(false);

    function Login(){
        return(
            <div className='a-right'>
                <from className="infoForm authForm">
                    <h3 className='auth'>Log in</h3>
                    <div><input type="text" placeholder='Username' className='infoinput' name='username'/></div>
                    <div><input type="text" placeholder='Password' className='infoinput' name='password'/></div>
                    <div>
                        <span className='signorlog' style={{fontSize:'12px'}} onClick={()=>setLogin(false)}>Don't have an account.SignUp</span>
                        <button className="button infobutton" type="submit">Login</button>
    
                    </div>
                </from>
            </div>
        )
    }
    function SignUp(){
        return(
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
                        <span style={{fontSize:"12px"}} className="signorlog" onClick={()=>setLogin(true)}>Already have an account.Login!</span>
                    </div>
                    <button className='button infobutton' type="submit">SignUp</button>
                </form>
            </div> 
        )
    }


    return(
        <div className='Auth'>
            <div className='a-left'>
                <img src={Logo}/>
                <div className='webname'>
                    <h1>KEY</h1>
                    <h6>Know everything you want.</h6>
                </div>
            </div>
            {!login && <SignUp />}
            {login && <Login />}
        </div>
    )
}

export default Auth;