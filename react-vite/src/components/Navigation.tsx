import React from "react";
import { Link } from "react-router-dom";
export function Navigation() {
    return (
        <nav className="Navig">
            <span >React</span>
            <span className="NameLink">
                <Link to='/' >Products</Link>
                <Link to='About'>About</Link>
            </span>
        </nav>
    )
}