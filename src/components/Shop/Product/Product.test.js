import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
// import { BrowserRouter } from 'react-router-dom';
// import userEvent from "@testing-library/user-event";
import Product from "./Product";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import products from '../../products.js';

const product = products[0];

describe('Testing Product component', () => {
    it('Has a quantity state of 1 on render', () => {
        render(<Product data={product} />)

        const productElem = screen.getByRole('textbox');
        expect(productElem.value).toBe('1'); 
    })

    it('Adds 1 to state and renders input with new value', async () => {
        render(<Product data={product} />);
        const user = userEvent.setup();

        const plusBtnElem = screen.getByText('+');
        const productInputElem = screen.getByRole('textbox');
     
        await act(async () => await user.click(plusBtnElem))
        expect(productInputElem.value).toBe('2');

        await act(async () => {
            for(let i = 1; i <= 5; i++) {
                await user.click(plusBtnElem)
            }
        })
        expect(productInputElem.value).toBe('7');
    })

    it('Subtracts 1 to state and renders input with new value when - btn is pushed', async () => {
        render(<Product data={product} />);
        const user = userEvent.setup();

        const minusBtnElem = screen.getByText('-');
        const productInputElem = screen.getByRole('textbox');
     
        await act(async () => await user.click(minusBtnElem))
        expect(productInputElem.value).toBe('0');
    })

})