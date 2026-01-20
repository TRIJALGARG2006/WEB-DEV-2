import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import Bollywood from './Bollywood'
import Technology from './Technology'
import Hollywood from './Hollywood'
import Fitness from './Fitness'
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <Link to="/">BLOG<span>World
                    </span></Link>
            </div>
            <div className="nav-links">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/bollywood">Bollywood</Link>
                <Link className="link" to="/technology">Technology</Link>
                <Link className="link" to="/hollywood">Hollywood</Link>
                <Link className="link" to="/fitness">Fitness</Link>
                <Link className="link" to="/food">Food</Link>
            </div>
        </nav>

    )
}

export default Navbar