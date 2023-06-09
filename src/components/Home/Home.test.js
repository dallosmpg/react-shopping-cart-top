import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import { BrowserRouter } from 'react-router-dom';
// import userEvent from "@testing-library/user-event";
import Home from "./Home.js";

describe('Home component', () => {
    it('Home comp. renders correctly', () => {
        const setSvgColor = jest.fn();

        render(
        <BrowserRouter>
            <Home setSvgColor={setSvgColor} />
        </BrowserRouter>
        )
        const textElement = screen.getByText(/Welcome to the Beanery/i);
        expect(textElement).toBeInTheDocument();
      })

    it('useEffect updates --svg-color property in Home', () => {
        const setSvgColor = jest.fn();
        render(
            <BrowserRouter>
                <Home setSvgColor={setSvgColor} />
            </BrowserRouter>
        )

        expect(setSvgColor).toHaveBeenCalledWith('#4f0842');
    });

;})