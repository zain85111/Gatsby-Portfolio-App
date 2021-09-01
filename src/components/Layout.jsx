import React from 'react'
import Nav from './Nav'
import "../styles/globle.css"

export default function Layout({children}) {
    return (
        <div className="layout">
            <Nav/>
            <div className="content">
                {children}
            </div>
            <footer>
                <p>Copyright 2021 by Zain Ali</p>
            </footer>
        </div>
    )
}
