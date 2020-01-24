import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';
function Nav() {

    const tstyle= {
        color:"white",
        textDecoration:"none"
        
    };
    return (
        <nav>
            <h1>LOGO GOES HERE</h1>
            <ul className="nav-links">
                <Link to="/categories" style={tstyle}><li>Category</li></Link>
                <Link to="/cart" style={tstyle}><li>Cart</li></Link>
                <Link to="/wishlist" style={tstyle}><li>Wishlist</li></Link>
                <Link to="/Login" style={tstyle}><li>Login</li></Link>
            </ul>

        </nav>
    );
}

export default Nav;