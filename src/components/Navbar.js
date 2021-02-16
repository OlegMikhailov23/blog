import React, {Component} from 'react';

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar">
                <h1>The Oleg Blog</h1>
                <div className="links">
                    <a href="/">Home</a>
                    <a href="/create">New Blog</a>
                </div>
            </nav>
        );
    }
}

export default Navbar;
