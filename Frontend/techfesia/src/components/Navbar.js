import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = ()=>{
    return(
        <nav className="nav-wrapper red darken-3" >
            <div className="container">
                <a className="brand-logo">TechFesia</a>
                <ul className="right">
                    <li><NavLink to="/">Register</NavLink></li>
                    <li><NavLink to="/sendMessage">Send Message</NavLink></li>
                    <li><NavLink to="/updateUser">Update User</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}
export default NavBar;