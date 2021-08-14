import React from 'react'
// import {useSelector, useDispatch} from 'react-redux'
// import {bindActionCreators} from 'react'
// import {actionCreators} from './../state/index'


function Login() {

    const register = () => {

    }

    const login = () => {

    }
    
    return (
        <div className="login">
            <form>
                <input type="text" placeholder="Full Name ( if registering )"/>
                <input type="text" placeholder="Profile Pics Url (Optional)"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button type="submit">Sign In</button>
                <p>Dont't have an account? <span>Register</span></p>
            </form>
        </div>
    )
}

export default Login
