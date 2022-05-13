import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">HomePage</Link></li>
                    <li><Link to="/blogs/kiana">blogs</Link></li>
                    <li><Link to="/products">products</Link></li>
                    <li><Link to="/aboutus">aboutus</Link></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;