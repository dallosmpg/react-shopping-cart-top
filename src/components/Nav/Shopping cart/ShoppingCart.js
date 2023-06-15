import React, {useEffect, useState} from "react";
import './ShoppingCart.css';
import ShoppingCartItem from "./Shopping cart item/ShoppingCartItem";

export default function ShoppingCart({quantityOfProducts, shoppingCartItems, shoppingCartIsHidden, setShoppingCartRelatedVis, setShoppingCartItems, setQuantityOfProducts}) {
    const [shoppingCartTotalPrice, setShoppingCartTotalPrice] = useState(0)

    useEffect(() => {
        if (shoppingCartIsHidden) {
            document.querySelector('.shopping-cart').classList.remove('visible')
        } else {
            document.querySelector('.shopping-cart').classList.add('visible')
        }
    }, [shoppingCartIsHidden]);

    useEffect(() => {
       const newShoppingCartTotalPrice = shoppingCartItems
       .map(item => item.quantity * item.productPrice)
       .reduce((prevTotal, currTotal) => prevTotal + currTotal, 0);

       setShoppingCartTotalPrice(newShoppingCartTotalPrice.toFixed(2));
    }, [shoppingCartItems]);


    return (
            <div className='shopping-cart flex-center-column' data-testid="shopping-cart-test">
                <div className="shopping-cart-items">
                    {shoppingCartItems.length ? shoppingCartItems.map((item, i)=> <ShoppingCartItem quantityOfProducts={quantityOfProducts} setQuantityOfProducts={setQuantityOfProducts} setShoppingCartItems={setShoppingCartItems} key={i} shoppingCartItem={item} />) : <h2>At the moment, your cart is empty</h2>}
                </div>
                <div className="shopping-cart-menu flex-center-column">
                    <h1>Total: {shoppingCartTotalPrice} $</h1>
                    <div className="shopping-cart-buttons flex-center">
                        <button onClick={setShoppingCartRelatedVis} className="back-to-store--cart-btn">Back to the store</button>
                        <button disabled={shoppingCartItems.length === 0 ? true : false} className="place-order--cart-btn">Pay & place order</button>
                    </div>
                </div>
            </div>
    )
}