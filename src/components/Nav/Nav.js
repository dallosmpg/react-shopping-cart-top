import React from "react";
import './Nav.css';
import { Link } from "react-router-dom";
import ShoppingCart from "./Shopping cart/ShoppingCart";
import ShoppingCartBtn from "./Shopping cart button/ShoppingCartBtn";

export default function Nav({resizeCoffeeImg, shoppingCartItems, shoppingCartIsHidden, setShoppingCartRelatedVis, setShoppingCartItems, setQuantityOfProducts}) {

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
            <ShoppingCartBtn setShoppingCartRelatedVis={setShoppingCartRelatedVis}  shoppingCartItemCount={shoppingCartItems.length}/>
            <ShoppingCart setQuantityOfProducts={setQuantityOfProducts} setShoppingCartItems={setShoppingCartItems} setShoppingCartRelatedVis={setShoppingCartRelatedVis} shoppingCartIsHidden={shoppingCartIsHidden} shoppingCartItems={shoppingCartItems}/>
        </nav>
    )
}
