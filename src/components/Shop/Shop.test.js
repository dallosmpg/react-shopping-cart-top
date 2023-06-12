import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import { BrowserRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import Shop from "./Shop.js";
import App from "../../App.js";
import products from '../../products.js';
import { act } from 'react-dom/test-utils';


describe('Shop component', () => {
    it('Shop component renders correctly', async () => {
        render(<App />);
        const user = userEvent.setup();

        await act(async () => {
            await user.click(screen.getByRole('link', {name: 'Shop'}));
        })


        const textElement = screen.getByText(/Kenyan Dark/i);
        expect(textElement).toBeInTheDocument();
      })

    it('Renders a product', async () => {
        render(<App />);
        const user = userEvent.setup();

        await act(async () => {
            await user.click(screen.getByRole('link', {name: 'Shop'}));
        })

        const productElement = screen.getByRole('heading', {name: products[0].productName});
        expect(productElement).toBeInTheDocument();
    })
;})