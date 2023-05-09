import React from "react";
import './Nav.css';
import { Link } from "react-router-dom";

export default function Nav({resizeCoffeeImg}) {

    return (
        <nav className="flex-center navigation">
            <h1>The Beanery Store</h1>
            <ul className="flex-center">
                <li>
                    <Link className="home-nav" to='/'>Home</Link>
                </li>
                <li>
                    <Link onMouseEnter={resizeCoffeeImg} onMouseLeave={resizeCoffeeImg} className="shop-nav" to='/shop'>Shop</Link>
                </li>
                <li>
                    <Link className="about-nav" to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}
