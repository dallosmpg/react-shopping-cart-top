import React from "react";

export default function ShoppingCartItem({quantityOfProducts, shoppingCartItem, setShoppingCartItems, setQuantityOfProducts}) {
    const productName = shoppingCartItem.productName;

    function increaseProductQuantity() {
        const increasedQuantity = quantityOfProducts[productName] + 1;

        setQuantityOfProducts(prevQuantity => {
            const newQuantity = {...prevQuantity};
            newQuantity[productName] = increasedQuantity;
            return newQuantity;
        })

        setShoppingCart(increasedQuantity);
    }

    function decreaseProductQuantity() {
        const decreasedQuantity = quantityOfProducts[productName] - 1;

        setQuantityOfProducts(prevQuantity => {
            const newQuantity = {...prevQuantity};
            newQuantity[productName] = decreasedQuantity;
            return newQuantity;
        })

        setShoppingCart(decreasedQuantity);
    }

    function setShoppingCart(newQuantity) {
        setShoppingCartItems(prevShoppingCart => {
            const newShoppingCart = [...prevShoppingCart];
            return newShoppingCart.map(shoppingCartItem => {
                if (shoppingCartItem.productName === productName) {
                    shoppingCartItem.quantity = newQuantity;
                    return shoppingCartItem;
                }
                return shoppingCartItem;
            })
        })
    }
    
    return (
        <div className="flex-center shopping-cart-product-item">
            {/* <p>A vásárlás ingyen van és a miniatűr zsurmók felhőnéző szakkörét támogatod vele!</p>   */}
            <h3>{shoppingCartItem.productName}</h3>
            <h5>Qty: {shoppingCartItem.quantity}</h5>
            <h4>{shoppingCartItem.productPrice} $</h4>
            <h3>{shoppingCartItem.quantity * shoppingCartItem.productPrice} $</h3>
            <button onClick={decreaseProductQuantity}>-</button>
            <button onClick={increaseProductQuantity}>+</button>
            <button onClick={() => {
                        setShoppingCartItems(prevShoppingCart => {
                            const newShoppingCar = prevShoppingCart.filter(item => item.productName !== productName);
                            return newShoppingCar;
                        })                
            }}>X</button>
        </div>
    )
}