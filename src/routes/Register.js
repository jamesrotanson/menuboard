import React, {useState} from 'react'
import LoadingPage from './LoadingPage';
import Button from '../components/Button';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase-config';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [loading, setLoading] = useState(true)
    setTimeout(() => setLoading(false), 500);

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerError, setRegisterError] = useState(false);

    const navigate = useNavigate();

    const register = async () => {
        try {
            navigate('/app-home');
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            console.log(user)
            console.log("Successfully created an account!")
            
        }
        catch(error){
            setRegisterError(true);
            console.log(error.message);
        }
    }

    return (
        <div>
            {loading ? <LoadingPage/> :
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
            }    
        </div>
    )
}

export default Register