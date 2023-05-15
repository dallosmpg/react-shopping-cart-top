import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import { BrowserRouter } from 'react-router-dom';
// import userEvent from "@testing-library/user-event";
import Nav from "./Nav.js";

describe('Nav component', () => {
    it('Nav component renders correctly', () => {
        render(
        <BrowserRouter>
            <Nav />
        </BrowserRouter>
        )
        const textElement = screen.getByText(/The Beanery Store/i);
        expect(textElement).toBeInTheDocument();
      })
;})