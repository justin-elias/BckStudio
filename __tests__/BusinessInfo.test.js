import React from "react";
import '@testing-library/jest-dom';
import {render, getByLabelText} from "@testing-library/react";
import BusinessInfo from '../src/components/BusinessInfo/BusinessInfo';


describe("BusinessInfo", () => {
    test('should match snapshot', () => {
        const {asFragment} = render(<BusinessInfo/>);
        expect(asFragment()).toMatchSnapshot();
    });

    test("should render the BusinessInfo component", () => {
        const {getByLabelText} = render(<BusinessInfo/>);
        const businessInfo = getByLabelText("Business Info");
        expect(businessInfo).toBeInTheDocument();
    });

    test('should render Business Hours Component', () => {
        const {getByLabelText} = render(<BusinessInfo/>);
        const businessHours = getByLabelText("Business Hours");
        expect(businessHours).toBeInTheDocument();
    });

    test("should render the BusinessInfo component with the Hours text", () => {
        const {getByText} = render(<BusinessInfo/>);
        const businessInfo = getByText("HOURS");
        expect(businessInfo).toBeInTheDocument();
    });

    test('should render Business Address component', () => {
        const {getByLabelText} = render(<BusinessInfo/>);
        const businessAddress = getByLabelText("Business Address");
        expect(businessAddress).toBeInTheDocument();
    });
    test("should render the BusinessInfo component with the Location text", () => {
        const {getByLabelText, getByText} = render(<BusinessInfo/>);
        const businessInfo = getByText("LOCATION");
        expect(businessInfo).toBeInTheDocument();
    });
});