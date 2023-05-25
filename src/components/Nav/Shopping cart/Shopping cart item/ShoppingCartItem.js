import React from "react";

export default function ShoppingCartItem({shoppingCartItem}) {
    console.log(shoppingCartItem);

    return (
        <div className="flex-center shopping-cart-product-item">
            <h3>{shoppingCartItem.productName}</h3>
            <h5>Qty: {shoppingCartItem.quantity}</h5>
            <h4>{shoppingCartItem.productPrice} $</h4>
            <h3>${shoppingCartItem.quantity * shoppingCartItem.productPrice} $</h3>
        </div>
    )
}