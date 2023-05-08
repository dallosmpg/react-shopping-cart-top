import React, {useEffect} from "react";
import './Home.css' ;

export default function Home({setSvgColor}) {
    useEffect(() => {
        setSvgColor('#4f0842');
    }, []);

    return (
        <main className="home">
            <h1>Hello Home</h1>
        </main>
    )
}   