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
        <>
            <div className="welcome-page">
                <h1>iPasta</h1>
                <p>make your pasta dreams come true</p>
            </div>
            {showSignUp ? (
                <SignUpForm setUser={setUser} />
            ) : (
                <LoginForm setUser={setUser} />
            )}
            {showSignUp ? 
                <>
                    <p>Already have an account? Login <a className="authpage-link" onClick={handleSwitchForms} href="">here</a></p>
                </>
                : 
                <>
                    <p>First time here? Sign up <a className="authpage-link" onClick={handleSwitchForms} href="">here</a></p>
                </>
            }
        </>
    )
}