import React, {useEffect} from "react";
import './Shop.css';

export default function Shop({setSvgColor}) {
    useEffect(() => {
        setSvgColor('#546770');
    }, []);


    return (
        <main className="shop">
            <h1>Hello from Shop</h1>
        </main>

    )
}