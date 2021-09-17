import React from 'react'
import './../../css/Register.css'

function Register() {
    return (
        <div className="app__register">
            
            <div className="ui centered two column grid form_css">
            
             <div className="card">
             <h2 className="ui header signup_css">Sign Up</h2>
               <form className="ui form">
                    <div className="field">
                        <label>Full Name</label>
                        <input  type="text" 
                                placeholder="Full Name"/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input  type="email" 
                                placeholder="Password"/>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input  type="password" 
                                placeholder="Password"/>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input  type="file" 
                                placeholder="Profile Pics Url (Optional)"/>
                    </div>
                    
                    <button type="submit" className="ui positive button reg_button_css">Create Account</button>
                </form>
            </div>
        </div>
     
        </div>
    )
}

export default Register
