import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import { BrowserRouter } from 'react-router-dom';
// import userEvent from "@testing-library/user-event";
import Shop from "./Shop.js";

describe('Shop component', () => {
    it('Shop component renders correctly', () => {
        const setSvgColor = jest.fn();
        render(
        <BrowserRouter>
            <Shop  setSvgColor={setSvgColor}/>
        </BrowserRouter>
        )
        const textElement = screen.getByText(/Hello from Shop/i);
        expect(textElement).toBeInTheDocument();
      })
;})