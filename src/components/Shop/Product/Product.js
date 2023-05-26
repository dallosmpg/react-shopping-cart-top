import React, {useEffect, useState} from "react";
import './Product.css';

export default function Product({data, setShoppingCartItems, updateShoppingCart, setQuantityOfProducts, quantityOfProducts}) {
    // TODO: Create a function that handles setting the quantity state in App.js and somehow manage the quantity shown in Product comp.s
        const [localQuantity, setLocalQuantity] = useState(1)

        useEffect(() => {                
            setQuantityOfProducts((prevQtyOfProducts) => {
                const newObj = prevQtyOfProducts
                newObj[data.productName] = 1;
                return newObj;
            })
        }, [setQuantityOfProducts, data.productName]);

        useEffect(() => {
            console.log('New local state');
            setQuantityOfProducts(prevQtyOfProducts => {
                const newObj = prevQtyOfProducts;
                newObj[data.productName] = localQuantity;
                return newObj;
            })
        }, [localQuantity]);

        useEffect(() => {
            console.log('New local state update from global state');
            if (quantityOfProducts[data.productName] !== localQuantity) {
                setLocalQuantity(quantityOfProducts[data.productName])
            }
        }, [quantityOfProducts])


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
                    <button onClick={() => setLocalQuantity(localQuantity - 1)}>-</button>
                    <input type="tel" id="quantity" name="quantity" pattern="[0-9]+" onChange={(e) => setLocalQuantity(Number(e.target.value))} value={localQuantity} />
                    <button onClick={() => setLocalQuantity(localQuantity + 1)}>+</button>
                </div>
                <button onClick={() => setShoppingCartItems(prevShoppingCart => updateShoppingCart(data, localQuantity, prevShoppingCart))}>Add to cart</button>
            </div>
        </div>
    )
}
