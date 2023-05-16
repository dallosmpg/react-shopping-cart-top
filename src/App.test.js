import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import { BrowserRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import App from "./App.js";

describe('App component', () => {
    it('App comp. renders correctly', () => {
        render(
            <App />
        )
        const textElement = screen.getByText(/Colombian - Kenyan Coffee/i);
        expect(textElement).toBeInTheDocument();
      });

    it('renders the Nav component', () => {
        render(<App />);

        const navElement = screen.getByRole('navigation');
        expect(navElement).toBeInTheDocument();
    });

    it('initial state value of svgColor is correct', () => {
        render(<App />);
        // Assert the initial state value of svgColor
        expect(document.documentElement.style.getPropertyValue('--svg-color')).toBe('#4f0842');    
    })

    it('svgOpacitiy is altered after the given time', () => {
        render(<App />);

        setTimeout(() => {
            expect(document.documentElement.style.getPropertyValue('--svg-opacity')).toBe(1);    
        }, 1000)
    })

    it('useEffect updates --svg-color property', () => {
        // Render the component
        render(<App />);
        
        // Simulate a change in the svgColor state
        fireEvent.click(screen.getByText('Shop'));
        
        // Assert that the --svg-color property is updated
        expect(document.documentElement.style.getPropertyValue('--svg-color')).toBe('#546770');
        fireEvent.click(screen.getByText('Home'));
      });

      it('useCallback modifies --coffee-img-size property correctly', () => {      
        // Render the component
        render(<App />);
      
        // Simulate the resizeCoffeeImg callback
        fireEvent.mouseEnter(screen.getByTestId('custom-element'));
        setTimeout(() => {
            expect(document.documentElement.style.getPropertyValue('--coffee-img-size')).toBe('1.1');
        }, 10)
        fireEvent.mouseLeave(screen.getByTestId('custom-element'));
        expect(document.documentElement.style.getPropertyValue('--coffee-img-size')).toBe('1');
      });

})