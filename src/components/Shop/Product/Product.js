import React, {useEffect} from "react";
import './Product.css';

export default function Product({data, setShoppingCartItems, updateShoppingCart, setQuantityOfProducts, quantityOfProducts}) {
    // TODO: Create a function that handles setting the quantity state in App.js and somehow manage the quantity shown in Product comp.s
    const productName = data.productName;
    const productQty = quantityOfProducts[productName];


    return (
        <div className="product-card flex-center-column">
            <div className="product-info flex-center-column">
                <div className="product-img flex-center-column">
                    <img src={data.productImg} alt={`${data.productAltTxt} coffee package`} />
                </div>
                <div className="product-text">
                    <h3>{data.productName}</h3>
                    <h2>{data.productPrice} $</h2>
                    <p style={{overflow: "scroll", height: '100px'}}>{data.productDescription}</p>
                </div>
            </div>
            <div className="product-cart-menu flex-center-column">
                {/* <a href="/">Visit product page</a> */}
                <div className="quantity-selector flex-center">
                    <button className="flex-center" onClick={() => setQuantityOfProducts(prevQty => {
                        const newQty = {...prevQty};
                        newQty[productName] = newQty[productName] - 1;
                        return newQty;
                    })}>-</button>
                    <input type="tel" id="quantity" name="quantity" pattern="[0-9]+" onChange={(e) => setQuantityOfProducts(prevQty => {
                        const newQty = {...prevQty};
                        newQty[productName] = e.target.value;
                        return newQty;
                    })} value={productQty} />
                    <button className="flex-center" onClick={() => setQuantityOfProducts(prevQty => {
                        const newQty = {...prevQty};
                        newQty[productName] = newQty[productName] + 1;
                        return newQty;
                    })}>+</button>
                </div>
                <button onClick={() => setShoppingCartItems(prevShoppingCart => updateShoppingCart(data, quantityOfProducts[productName], prevShoppingCart))}>Add to cart</button>
            </div>
        </div>
    )
}
