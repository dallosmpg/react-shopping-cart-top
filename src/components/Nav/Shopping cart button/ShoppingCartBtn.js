import React, { useEffect } from "react";

export default function ShoppingCartBtn({shoppingCartItemCount, setShoppingCartRelatedVis}) {
    useEffect(() => {
        if (!shoppingCartItemCount) return;
        toggleBtnAnimation()
    }, [shoppingCartItemCount])
    
    async function toggleBtnAnimation() {
        document.querySelector('.shopping-cart-btn').classList.add('animate-shopping-cart-btn');
        setTimeout(() => {
            document.querySelector('.shopping-cart-btn').classList.remove('animate-shopping-cart-btn');
        }, 1000)
    }
    
    return (
            <button data-testid="shopping-cart-btn-test" onClick={() => setShoppingCartRelatedVis()} className="shopping-cart-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32l51.9 207.5C91 492 116.6 512 146 512h284c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32h-85.6L365.3 12.9c-6.1-11.7-20.6-16.3-32.4-10.2s-16.3 20.6-10.2 32.4L404.3 192H171.7l81.6-156.9zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-8.8 7.2-16 16-16s16 7.2 16 16z"></path></svg>
                <div className="shopping-cart-item-counter flex-center">
                    {shoppingCartItemCount}
                </div>
            </button>
    )
}