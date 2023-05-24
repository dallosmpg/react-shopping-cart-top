import React, {useState, useEffect} from "react";
import './Product.css';

export default function Product({data, setShoppingCartItems}) {
    const [quantity, setQuantity] = useState(1);

    // useEffect(() => {
    //     console.log(quantity);
    // }, [quantity])

    return (
        <div className="product-card flex-center-column" data-testid="product">
            <div className="product-info flex-center-column">
                <div className="product-img">
                    <img src={data.productImg} alt={`${data.productName} coffee package`} />
                </div>
                <div className="product-text">
                    <h3>{data.productName}</h3>
                    <h2>{data.productPrice} $</h2>
                    <p>{data.productDescription}</p>
                </div>
            </div>
            <div className="product-menu flex-center-column">
                <a href="/">Visit product page</a>
            </div>
            <div className="product-cart-menu flex-center-column">
                <div className="quantity-selector">
                    <button onClick={() => setQuantity(prevQuantity => --prevQuantity)}>-</button>
                    <input type="tel" id="quantity" name="quantity" pattern="[0-9]+" onChange={(e) => {
                        setQuantity(Number(e.target.value));
                    }} value={quantity} />
                    <button onClick={() => setQuantity(prevQuantity => ++prevQuantity)}>+</button>
                </div>
                <button onClick={() => setShoppingCartItems(prevShoppingCart => {
                    const productPurchaseObj = {quantity, productName: data.productName, productPrice: data.productPrice}
                    if (prevShoppingCart.map(item => item.productName).includes(data.productName)) {
                        const productIndex = prevShoppingCart.map(item => item.productName).indexOf(data.productName);
                        return prevShoppingCart.splice(productIndex, 1, productPurchaseObj);
                    }
                   return [...prevShoppingCart, productPurchaseObj];
                })}>Add to cart</button>
            </div>
        </div>
    )
}