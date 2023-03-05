import React, { useState } from 'react'
import LoadingPage from './LoadingPage';
import Button from '../components/Button';
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase-config';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [loading, setLoading] = useState(true)
    setTimeout(() => setLoading(false), 500);


    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [loginError, setLoginError] = useState(false)

    const navigate = useNavigate();

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            console.log(user)
            console.log("Successfully logged in!")
            navigate('/app-home');
        }
        catch(error){
            setLoginError(true);
            console.log(error.message);
        }

    }

    return (
        <div>
        {loading ? <LoadingPage/> :
            <div className='Auth-container'>
                <img src={require("../images/small-logo.png")} className="Logo-big" alt="Logo"/>
                <br></br>
                <h3>Log in to Menuboard</h3>
                <br></br>
                <form>
                    <input 
                        type="email"
                        placeholder="Email"
                        className="Form-input"
                        onChange={(event) => {setLoginEmail(event.target.value)}}
                    />
                    <input 
                        type="password"
                        placeholder="Password" 
                        className="Form-input"
                        onChange={(event) => {setLoginPassword(event.target.value)}}
                    />
                    <Button name="Log in" appearance="primary" onClick={login}/>
                    {loginError && <span className="Input-error">Wrong email or password. Try again.</span>}
                </form>

            </div>
        } 
        </div>
    )
}

export default Login