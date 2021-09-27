import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../config/firebase';
import { useStore } from '../../store/store';
import './../../css/Header.css';

const Header = (props) => {
   // @ts-ignore
   const currentUser = useStore(state => state.currentUser)
    return (
        <div className="ui fixed menu">
            <h2 className="ui header header_logo">OnlineShop</h2>
            <div className="ui container center">
                <div className="ui secondary menu"> 
              
                    <Link className="active item" to="/">Home</Link>
                    {currentUser ? 
                        <Link className="item" to="/dashboard">Dashboard</Link>
                    : 
                        <>
                        <Link className="item" to="/login">Login</Link>
                        <Link className="item" to="/register">Register</Link>
                        </>
                    }          
                    <Link className="item" to="/products">Products</Link>

                    <div className="right menu">
                        <div className="item">
                            <div className="ui icon input">
                                <input type="text" placeholder="Search..."/>
                                <i aria-hidden="true" className="search icon"></i>
                            </div>
                        </div>
                        {currentUser?
                        <Link to="logout" className="item" onClick={ () => auth.signOut()}>Logout</Link>
                        : " "}
                        </div>
                    </div>

                
            </div>
        </div>
    )
}

export default Header
