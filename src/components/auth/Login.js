import firebase from 'firebase'
import React, { useEffect } from 'react'
import './../../css/Login.css'
import { auth, signInWithGoogle } from './../../config/firebase'
import { useStore } from '../../store/store'

function Login() {
    // @ts-ignore
    const currentUser = useStore(state => state.currentUser)
    // @ts-ignore
    const setCurrentUser= useStore(state => state.setCurrentUser)
    let authListener = null

    const handleSubmit = async e => {
        e.preventDefault()
    }

    useEffect(() => {
        authListener = auth.onAuthStateChanged(userAuth => {
            if (!userAuth) return
            setCurrentUser(userAuth.uid)
          });
    },[authListener]);

//     firebase
//     .firestore()
//     .collection("users")
//     .add({
//       first_name: "Working",
//       last_name: "This is to check the Integration is working",
//       email: ""
//   })
  
    return (
        <div className="">
            <div className="ui container container_css">
            <h2 className="ui large header">Login</h2>
            <form className="ui form" onSubmit={handleSubmit}>
                    <div className="field">
                        <input  type="email" 
                                placeholder="Password"/>
                    </div>
                    <div className="field">
                        <input  type="password" 
                                placeholder="Password"/>
                    </div>
                    
                    <button type="submit" className="ui positive button">Login</button>
                    <br></br>
                    <p>or</p>
                    <br></br>
                    <div className="row">
                        <button type="submit" className="ui secondary button" onClick={signInWithGoogle}>Login with Google</button>
                    </div>
                </form>
            </div>
        </div>
       
    )
}

export default Login
