import React, {useEffect} from "react";
import './About.css';

export default function About({setSvgColor}) {
    useEffect(() => {
        setSvgColor('#400446');
    }, []);

    return (
        <h1>Hello from About</h1>
    )
}