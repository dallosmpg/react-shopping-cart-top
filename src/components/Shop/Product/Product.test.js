import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
// import { BrowserRouter } from 'react-router-dom';
// import userEvent from "@testing-library/user-event";
import Product from "./Product";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import products from './Product';
import App from '../../../App';


const product = products[0];

describe('Testing Product component', () => {
    it('Has a quantity state of 1 on render', async () => {
        render(<App />) 
        const user = userEvent.setup();

        await act(async () => {
            await user.click(screen.getByRole('link', {name: 'Shop'}));
        })


        const productElem = screen.getAllByRole('textbox');
        expect(productElem[0].value).toBe('1'); 
    })

    it('Adds 1 to state and renders input with new value', async () => {
        render(<App />) 
        const user = userEvent.setup();

        await act(async () => {
            await user.click(screen.getByRole('link', {name: 'Shop'}));
        })

        const plusBtnElem = screen.getAllByText('+')[0];
        const productInputElem = screen.getAllByRole('textbox')[0];
     
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
        render(<App />) 
        const user = userEvent.setup();

        await act(async () => {
            await user.click(screen.getByRole('link', {name: 'Shop'}));
        })

        const minusBtnElem = screen.getAllByText('-')[0];
        const productInputElem = screen.getAllByRole('textbox')[0];
     
        await act(async () => await user.click(minusBtnElem))
        expect(productInputElem.value).toBe('0');
    })

})