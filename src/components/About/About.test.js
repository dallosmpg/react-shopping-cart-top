import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import { BrowserRouter } from 'react-router-dom';
// import userEvent from "@testing-library/user-event";
import About from "./About.js";

describe('About component', () => {
    it('About comp. renders correctly', () => {
        const setSvgColor = jest.fn();

        render(
        <BrowserRouter>
            <About setSvgColor={setSvgColor} />
        </BrowserRouter>
        )
        const textElement = screen.getByText(/Hello from About/i);
        expect(textElement).toBeInTheDocument();
      })
;})