import React, {useEffect} from "react";
import './Shop.css';
import Product from "./Product/Product";
import products from '../../products.js';


export default function Shop({setSvgColor, setShoppingCartItems}) {
    useEffect(() => {
        setSvgColor('#546770');
    }, []);


    return (
        <main className="shop">
            <div className="products flex-center">
                {products.map((product, i) => {
                    return <Product setShoppingCartItems={setShoppingCartItems} key={i} data={product} />
                })}
            </div>
        </main>

    )
}