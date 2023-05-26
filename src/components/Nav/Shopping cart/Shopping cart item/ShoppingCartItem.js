import React from "react";

export default function ShoppingCartItem({shoppingCartItem, setShoppingCartItems}) {
    const productName = shoppingCartItem.productName;

    return (
        <div className="flex-center shopping-cart-product-item">
            <h3>{shoppingCartItem.productName}</h3>
            <h5>Qty: {shoppingCartItem.quantity}</h5>
            <h4>{shoppingCartItem.productPrice} $</h4>
            <h3>{shoppingCartItem.quantity * shoppingCartItem.productPrice} $</h3>
            <button>-</button>
            <button>+</button>
            <button onClick={() => {
                        setShoppingCartItems(prevShoppingCart => {
                            const newShoppingCar = prevShoppingCart.filter(item => item.productName !== productName);
                            return newShoppingCar;
                        })                
            }}>X</button>
        </div>
    )
}