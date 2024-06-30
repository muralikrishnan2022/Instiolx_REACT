import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <header>
            <div id="logo">InstiOLX</div>
            <div className="navbar">
                <Link to="/home">Home</Link>
                <Link to="/buy">Buy</Link>
                <Link to="/sell">+SELL</Link>
                <Link to="/cart">Cart</Link>
            </div>
        </header>
    );
}

export default Navbar;
