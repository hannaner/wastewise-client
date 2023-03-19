import { useState } from 'react'
import SignUpForm from '../../components/SignupForm/SignupForm'
import LoginForm from '../../components/LoginForm/LoginForm'
// import "./AuthPage.css"

export default function AuthPage({ setUser }) {
    
    const [showSignUp, setShowSignUp] = useState(false)
    
    function handleSwitchForms(event) {
        event.preventDefault()
        setShowSignUp(!showSignUp)
    }

    return (
        <div className="welcome-page">
            <div className="greeting">
                <h1>wastewise</h1>
                <p className="slogan">track your groceries to reduce food waste</p>
            </div>
            {showSignUp ? (
                <SignUpForm setUser={setUser} />
            ) : (
                <LoginForm setUser={setUser} />
            )}
            {showSignUp ? 
                <>
                    <p>Already have an account?</p> <p>Login <a className="authpage-link" onClick={handleSwitchForms} href="">here</a></p>
                </>
                : 
                <>
                    <p>Don't have an account?</p> <p>Sign up <a className="authpage-link" onClick={handleSwitchForms} href="">here</a></p>
                </>
            }
        </div>
    )
}