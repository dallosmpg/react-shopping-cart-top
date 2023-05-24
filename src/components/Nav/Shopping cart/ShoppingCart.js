import React, {useEffect} from "react";
import './ShoppingCart.css';
import ShoppingCartItem from "./Shopping cart item/ShoppingCartItem";

export default function ShoppingCart({shoppingCartItems, shoppingCartIsHidden}) {

    useEffect(() => {
        document.querySelector('.shopping-cart').classList.toggle('visible')
    }, [shoppingCartIsHidden])

    return (
            <div className='shopping-cart flex-center-column'>
                {shoppingCartItems.length ? shoppingCartItems.map((item, i)=> <ShoppingCartItem key={i} shoppingCartItem={item} />) : <h3>At the moment, your cart is empty</h3>}
            </div>
    )
}