import React from "react";
import './Nav.css';
import { Link } from "react-router-dom";

export default function Nav() {

    return (
        <nav className="flex-center navigation">
            <h1>FakeStore</h1>
            <ul className="flex-center">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/shop'>Shop</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}
