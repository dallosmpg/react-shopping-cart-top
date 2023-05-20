import React, {useState, useEffect} from "react";
import './Product.css';

export default function Product({data}) {
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        console.log(quantity);
    }, [quantity])

    return (
        <div className="product-card flex-center-column" data-testid="product">
            <div className="product-info flex-center-column">
                <div className="product-img">
                    <img src={data.productImg} alt={`${data.productName} coffee package`} />
                </div>
                <div className="product-text">
                    <h3>{data.productName}</h3>
                    <p>{data.productDescription}</p>
                </div>
            </div>
            <div className="product-menu flex-center-column">
                <a href="/">Visit product page</a>
                <button>Add to cart</button>
            </div>
            <div className="product-cart-menu flex-center-column">
                <div className="quantity-selector">
                    <button onClick={() => setQuantity(prevQuantity => --prevQuantity)}>-</button>
                    <input type="tel" id="quantity" name="quantity" pattern="[0-9]+" onChange={(e) => {
                        setQuantity(Number(e.target.value));
                    }} value={quantity} />
                    <button onClick={() => setQuantity(prevQuantity => ++prevQuantity)}>+</button>
                </div>
                <button>Add to cart</button>
            </div>
        </div>
    )
}