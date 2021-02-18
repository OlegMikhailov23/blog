import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar">
                <h1>The Oleg Blog</h1>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/create">New Blog</Link>
                </div>
            </nav>
        );
    }
}

export default Navbar;
