import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import { BrowserRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import App from "../../../App";
import ShoppingCart from "./ShoppingCart";
import { act } from "react-dom/test-utils";

const quantityOfProducts = {
    item1: 2,
    item2: 5,
}

const shoppingCartItems = [
    { quantity: 1, productName: "Colombian dark", productPrice: 12.99 },
    { quantity: 1, productName: "Kenyan dark", productPrice: 9.99 }
]

describe('Testing the Shopping cart component', () => {
    // it('Renders correctly', () => {
    //     render(<App />);
    //     const user = userEvent.setup();

    //     const shoppingCart = screen.queryByTestId('shopping-cart-test');
    //     const shoppingCartBtn = screen.getByTestId('shopping-cart-btn-test');

    //     expect(shoppingCartBtn).toBeVisible();
    //     expect(shoppingCart).not.toBeVisible();

    // })

    it('Is visible when vis is true', () => {
        render(<ShoppingCart shoppingCartIsHidden={false} shoppingCartItems={shoppingCartItems} />);

        const shoppingCart = screen.queryByTestId('shopping-cart-test');
        expect(shoppingCart.classList[2]).toBe('visible')
    })
})