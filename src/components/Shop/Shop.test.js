import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import { BrowserRouter } from 'react-router-dom';
// import userEvent from "@testing-library/user-event";
import Shop from "./Shop.js";
import products from '../../products.js';

describe('Shop component', () => {
    it('Shop component renders correctly', () => {
        const setSvgColor = jest.fn();
        render(
        <BrowserRouter>
            <Shop  setSvgColor={setSvgColor}/>
        </BrowserRouter>
        )
        const textElement = screen.getByText(/Kenyan Dark/i);
        expect(textElement).toBeInTheDocument();
      })

    it('Renders a product', () => {
        const setSvgColor = jest.fn();
        render(
        <BrowserRouter>
            <Shop  setSvgColor={setSvgColor}/>
        </BrowserRouter>
        )

        const productElement = screen.getByRole('heading', {name: products[0].productName});
        expect(productElement).toBeInTheDocument();
    })
;})