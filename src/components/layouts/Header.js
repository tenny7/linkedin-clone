import React from 'react'
import { Link } from 'react-router-dom'
import './../../css/Header.css';

const Header = () => {
   
    return (
        <div className="ui fixed menu">
            <h2 className="ui header header_logo">OnlineShop</h2>
            <div className="ui container center">
                <div className="ui secondary menu"> 
                    <Link className="active item">Home</Link>
                    <Link className="item" to="/login">Login</Link>
                    <Link className="item" to="/register">Register</Link>
                    <Link className="item" to="/dashboard">Dashboard</Link>
                    <Link className="item" to="/products">Products</Link>
                    <div className="right menu">
                        <div className="item">
                            <div className="ui icon input">
                                <input type="text" placeholder="Search..."/>
                                <i aria-hidden="true" className="search icon"></i>
                            </div>
                        </div>
                        <a className="item">Logout</a>
                        </div>
                    </div>
                    {/* <div className="ui buttons b">
                        <button className="ui button">Light</button>
                            <div className="or"></div>
                        <button className="ui secondary button">Dark Theme</button>
                    </div> */}

                
            </div>
        </div>
    )
}

export default Header
