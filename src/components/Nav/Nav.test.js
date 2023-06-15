import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import { BrowserRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import { act } from 'react-dom/test-utils';
import Nav from "./Nav.js";
import App from '../../App.js';

describe('Nav component', () => {
    it('Nav component renders correctly', () => {
        render(
        <BrowserRouter>
            <Nav shoppingCartItems={[0,1]} />
        </BrowserRouter>
        )
        const textElement = screen.getByText(/The Beanery Store/i);
        expect(textElement).toBeInTheDocument();
      })

    it('Switches to Shop when shop nv-btn is clicked', async () => {
        render(<App />);
        const user = userEvent.setup();

        expect(screen.getByText('Brazilian dark!')).toBeInTheDocument();
        expect(screen.getByRole('link', {name: 'Shop'})).toBeInTheDocument();
        await act(async () => {
            await user.click(screen.getByRole('link', {name: 'Shop'}));
        })
        expect(screen.getByText('Kenyan dark')).toBeInTheDocument();

        await act(async () => {
            await user.click(screen.getByRole('link', {name: 'Home'}));
        })    
    })

    it('Switches to About when about navLink is clicked', async () => {
        render(<App />);
        const user = userEvent.setup();

        expect(screen.getByText('Brazilian dark')).toBeInTheDocument();
        expect(screen.getByRole('link', {name: 'About'})).toBeInTheDocument();
        await act(async () => {
            await user.click(screen.getByRole('link', {name: 'About'}));
        })
        expect(screen.getByText("Hi! I'm Martin.")).toBeInTheDocument();

        await act(async () => {
            await user.click(screen.getByRole('link', {name: 'Home'}));
        })    
    })

    it('Returns to Home page after navigated to Home', () => {
        render(<App />);
        const user = userEvent.setup();

        user.click(screen.getByTestId('shopping-cart-btn-test'))

        expect(screen.getByText('New arrivals!')).toBeInTheDocument();
        expect(screen.getByRole('link', {name: 'About'})).toBeInTheDocument();
    })

;})