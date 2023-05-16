import React, {useEffect} from "react";
import './Home.css' ;

import { Link } from "react-router-dom";

import image from '../../assets/images/250.BB_.nk_.z.v.bean_.webp';

export default function Home({setSvgColor, resizeCoffeeImg}) {
    useEffect(() => {
        setSvgColor('#4f0842');
    }, []);

    return (
        <main className="home">
            <div className="home-text flex-center-column">
                <h3>New arrivals!</h3>
                <h2>Colombian - Kenyan Coffee // Fresh roast</h2>
                <p>Welcome to the Beanery, your one-stop shop for high-quality, freshly roasted coffee beans and accessories. We're passionate about bringing you the best coffee experience possible, and that's why we carefully source our beans from the finest farms and roast them to perfection in small batches. Our collection includes a variety of single-origin and blended beans, each with its unique flavor profile, so you can explore and discover your new favorite coffee. We also offer a range of coffee accessories, from grinders to brewers to mugs, to help you achieve the perfect brew at home. So why wait? Browse our selection and join us on a journey of discovery and indulgence!</p>
                <Link data-testid="custom-element" onMouseEnter={resizeCoffeeImg} onMouseLeave={resizeCoffeeImg} to='/shop'> Shop now ➡️</Link>
            </div>
            <div className="home-hero flex-center-column">
                <img src={image} alt="Coffee bean package" />
            </div>
        </main>
    )
}