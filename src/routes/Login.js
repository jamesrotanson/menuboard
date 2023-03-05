import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import LoadingPage from './LoadingPage';

const Login = () => {

    const [loading, setLoading] = useState(true)
    setTimeout(() => setLoading(false), 500);

    return (
        <div>
        {loading ? <LoadingPage/> :
            <div className="Page-container">
                <div className='Page-small'>
                    <LoginForm/>
                </div>
            </div> 
        } 
        </div>
    )
}

export default Login