import React, {useEffect} from "react";
import './Shop.css';
import Product from "../Product/Product";
import products from '../../products.js';


export default function Shop({setSvgColor}) {
    useEffect(() => {
        setSvgColor('#546770');
    }, []);


    return (
        <main className="shop">
            <h1>Hello from Shop</h1>
            <div className="products flex-center">
                {products.map((product, i) => {
                    return <Product key={i} data={product} />
                })}
            </div>
        </main>

    )
}