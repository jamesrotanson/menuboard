import { useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import Button from "./Button";
import {auth} from '../firebase-config';

const LoginForm = () => {
  
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerError, setRegisterError] = useState(false);

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [loginError, setLoginError] = useState(false)
    
    // Somehow this does not work - to show the logged in email. 
    // const [user, setUser] = useState({});
    // onAuthStateChanged(auth, (currentUser) => {
    //     setUser(currentUser)
    // })

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            console.log(user)
            console.log("Successfully created an account!")
        }
        catch(error){
            setRegisterError(true);
            console.log(error.message);
        }
    }

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            console.log(user)
            console.log("Successfully logged in!")
        }
        catch(error){
            setLoginError(true);
            console.log(error.message);
        }

    }

    const logout = async () => {
        await signOut(auth);
    }

  return (
    <div>
        <div className="Auth-container">
            <img src={require("../images/small-logo.png")} className="Logo-big" alt="Logo"/>
            <br></br>
            <h3>Create your account</h3>
            <br></br>
            <form>
                <input 
                    type="email"
                    placeholder="Email" 
                    className="Form-input"
                    onChange={(event) => {setRegisterEmail(event.target.value)}}
                />
                <input 
                    type="password"
                    placeholder="Password" 
                    className="Form-input"
                    onChange={(event) => {setRegisterPassword(event.target.value)}}
                />
                <Button name="Create user" appearance="primary" onClick={register}/>
                {registerError && <span class="Input-error">Password must be more than 6 characters</span>}
                <br></br>
                <small>By signing up, you agree to the <a>Terms of Service</a> and <a>Data Processing Agreement</a></small>
            </form>
        </div>
        
        
        <h3>Login</h3>
        <form className="Form">
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

        {/* {user?.email} */}
        <Button name="Log out" appearance="default" onClick={logout}/>
        
    </div>
  );
}

export default LoginForm
