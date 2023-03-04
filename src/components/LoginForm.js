import { useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import Button from "./Button";
import {auth} from '../firebase-config';

const LoginForm = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("")
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  const register = async () => {
    try {
        const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
        );
        console.log(user);
    }
    catch (error){
        console.log(error.message);
    }
  }
  

  const handleSignIn = async () => {
    try {
        const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
        );
        console.log(user);
    }
    catch (error){
        console.log(error.message);
    }
  }

  const handleSignOut = async () => {
    await signOut(auth);
    console.log(user)
  }

  return (
    <div>

        <h3>Register</h3>
        <input 
            type="email"
            placeholder="Email" 
            onChange={(event) => {
                setRegisterEmail(event.target.value)
            }}
        />
        <input 
            type="password"
            placeholder="Password" 
            onChange={(event) => {
                setRegisterPassword(event.target.value)
            }}
        />
        <Button name="Create user" appearance="primary" onClick={register}/>

        <h3>Login</h3>
        <input 
            placeholder="Email" 
            onChange={(event) => {
                setLoginEmail(event.target.value)
            }}
        />
        <input 
            placeholder="Password" 
            onChange={(event) => {
                setLoginPassword(event.target.value)
            }}
        />
        <Button name="Log in" appearance="primary" onClick={handleSignIn}/>

        <Button name="Log out" appearance="default" onClick={handleSignOut}/>
        {user?.email}

    </div>
  );
}

export default LoginForm
