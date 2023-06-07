import React, {useEffect, useState} from "react";
import './ShoppingCart.css';
import ShoppingCartItem from "./Shopping cart item/ShoppingCartItem";

export default function ShoppingCart({shoppingCartItems, shoppingCartIsHidden, setShoppingCartRelatedVis, setShoppingCartItems, setQuantityOfProducts}) {
    const [shoppingCartTotalPrice, setShoppingCartTotalPrice] = useState(0)

    useEffect(() => {
        document.querySelector('.shopping-cart').classList.toggle('visible')
    }, [shoppingCartIsHidden]);

    useEffect(() => {
       const newShoppingCartTotalPrice = shoppingCartItems
       .map(item => item.quantity * item.productPrice)
       .reduce((prevTotal, currTotal) => prevTotal + currTotal, 0);

       setShoppingCartTotalPrice(newShoppingCartTotalPrice);
    }, [shoppingCartItems]);

    return (
            <div className='shopping-cart flex-center-column'>
                <div className="shopping-cart-items">
                    {shoppingCartItems.length ? shoppingCartItems.map((item, i)=> <ShoppingCartItem setQuantityOfProducts={setQuantityOfProducts} setShoppingCartItems={setShoppingCartItems} key={i} shoppingCartItem={item} />) : <h2>At the moment, your cart is empty</h2>}
                </div>
                <div className="shopping-cart-menu">
                    <h1>Total: {shoppingCartTotalPrice} $</h1>
                    <div className="shopping-cart-buttons flex-center">
                        <button onClick={setShoppingCartRelatedVis} className="back-to-store--cart-btn">Back to the store</button>
                        <button disabled={shoppingCartItems.length === 0 ? true : false} className="place-order--cart-btn">Pay & place order</button>
                    </div>
                </div>
            </div>
    )
}