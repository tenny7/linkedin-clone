// @ts-nocheck
import React, { useState } from 'react'
import './../../css/Register.css'
import { useStore } from './../../store/store'
import Validation from './Validation'

function Register() {
    // @ts-ignore
    const initialState = useStore(state => state.initialState)
    // @ts-ignore
    const setFormData = useStore(state => state.setFormData)
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState({})
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]:event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setErrors(Validation(values))  
    }
    return (
        <div className="app__register">
            <div className="ui container container_css">
                <div className="ui column centered card grid">
                <h2 className="ui large header row">Register</h2>
                    <form className="ui form" onSubmit={handleSubmit}>
                        <div className="field">
                            <input  type="text" name="firstName" value={values.firstName} onChange={handleChange} placeholder="First Name"/>
                            {errors.firstName && <p className="error">{errors.firstName}</p>}
                        </div>
                        <div className="field">
                            <input  type="text" name="lastName" value={values.lastName} onChange={handleChange} placeholder="Last Name"/>
                            {errors.lastName && <p className="error">{errors.lastName}</p>}
                        </div>
                        <div className="field">
                            <input  type="email" name="email" value={values.email} onChange={handleChange} placeholder="Email"/>
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>
                        <div className="field">
                            <input  type="password" name="password" value={values.password} onChange={handleChange} placeholder="Password"/>
                            {errors.password && <p className="error">{errors.password}</p>}  
                        </div>
                        {/* <div className="field">
                            <input  type="file" placeholder="Profile Pics Url (Optional)"/>
                        </div> */}
                        <div className="row ">
                            <button type="submit" className="ui secondary button">Create Account</button>
                        </div>
                        <br></br>
                    </form> 
                </div> 
            </div>
        </div>
    )
}

export default Register
