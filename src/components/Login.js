import React from 'react'

function Login() {
    return (
        <div className="login">
            <form>
                <input type="text" placeholder="Full Name ( if registering )"/>
                <input type="text" placeholder="Profile Pics Url (Optional)"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}

export default Login
