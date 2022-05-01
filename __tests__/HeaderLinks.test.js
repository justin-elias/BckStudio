import React from "react";
import '@testing-library/jest-dom';
import { render, fireEvent } from "@testing-library/react";
import HeaderLinks from "../src/components/Headers/HeaderLinks";

describe('HeaderLinks', () => {
    test('should render HeaderLinks component', () => {
        const { getByText } = render(<HeaderLinks />);
        const linkElement = getByText(/Sign In/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('should render HeaderLinks component with sign up link', () => {
        const { getByText } = render(<HeaderLinks />);
        const linkElement = getByText(/Sign Up/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('should render HeaderLinks component with sign out link', () => {
        const { getByText } = render(<HeaderLinks />);
        const linkElement = getByText(/Sign Out/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('should render HeaderLinks component with sign out link', () => {
        const { getByText } = render(<HeaderLinks />);
        const linkElement = getByText(/Sign Out/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('should render HeaderLinks component with sign out link', () => {
        const { getByText } = render(<HeaderLinks />);
        const linkElement = getByText(/Sign Out/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('should render HeaderLinks component with sign out link', () => {
        const { getByText } = render(<HeaderLinks />);
        const linkElement = getByText(/Sign Out/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('should render HeaderLinks component with sign out link', () => {
        const { getByText } = render(<HeaderLinks />);
        const linkElement = getByText(/Sign Out/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('should render HeaderLinks component with sign out link', () => {
        const {getByText} = render(<HeaderLinks/>);
        const linkElement = getByText(/Sign Out/i);
    });
});

