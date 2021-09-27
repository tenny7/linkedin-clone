import React from 'react'
import './../../css/Register.css'

function Register() {
    return (
        <div className="app__register">
            <div className="ui container container_css">
             <h2 className="ui large header">Register</h2>
               <form className="ui form">
                    <div className="field">
                        <input  type="text" 
                                placeholder="First Name"/>
                    </div>
                    <div className="field">
                        <input  type="text" 
                                placeholder="Last Name"/>
                    </div>
                    <div className="field">
                        <input  type="email" 
                                placeholder="Password"/>
                    </div>
                    <div className="field">
                        <input  type="password" 
                                placeholder="Password"/>
                    </div>
                    <div className="field">
                        <input  type="file" 
                                placeholder="Profile Pics Url (Optional)"/>
                    </div>
                    <button type="submit" className="ui positive button">Create Account</button>
                </form>  
            </div>
        </div>
    )
}

export default Register
