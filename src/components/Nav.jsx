import { Link } from 'gatsby'
import React from 'react'

export default function Nav() {
    return (
        <nav>
            <h1>Zain Ali</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    )
}
