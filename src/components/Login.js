import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {bindActionCreators} from 'react'
import {actionCreators} from './../state/index'


function Login() {

    const status = useSelector(state => state.status)
    const dispatch = useDispatch()
    const {login, logout} = bindActionCreators(actionCreators,dispatch)
    return (
        <div className="login">
            <form>
                <input type="text" placeholder="Full Name ( if registering )"/>
                <input type="text" placeholder="Profile Pics Url (Optional)"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button type="submit">Sign In</button>
                {status}
                <button onClick={() => login(true)}></button>
            </form>
        </div>
    )
}

export default Login
