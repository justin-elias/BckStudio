import React from "react";
import '@testing-library/jest-dom';
import { render, fireEvent } from "@testing-library/react";
import GridContainer from "../src/components/Grid/GridContainer";
import GridItem from "../src/components/Grid/GridItem";

describe('<GridContainer />', () => {
    it('should render correctly', () => {
        const {container} = render(<GridContainer/>);
        expect(container).toMatchSnapshot();
    });

    it('should render children', () => {
        const {container} = render(
            <GridContainer>
                <GridItem xs={12}>
                    <div>Test</div>
                </GridItem>
            </GridContainer>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render children with custom className', () => {
        const {container} = render(
            <GridContainer className="custom-class">
                <GridItem xs={12}>
                    <div>Test</div>
                </GridItem>
            </GridContainer>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render children with custom style', () => {
        const {container} = render(
            <GridContainer style={{backgroundColor: 'red'}}>
                <GridItem xs={12}>
                    <div>Test</div>
                </GridItem>
            </GridContainer>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render children with custom className and style', () => {
        const {container} = render(
            <GridContainer className="custom-class" style={{backgroundColor: 'red'}}>
                <GridItem xs={12}>
                    <div>Test</div>
                </GridItem>
            </GridContainer>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render children with custom className and style', () => {
        const {container} = render(
            <GridContainer className="custom-class" style={{backgroundColor: 'red'}}>
                <GridItem xs={12}>
                    <div>Test</div>
                </GridItem>
            </GridContainer>
        );
        expect(container).toMatchSnapshot();
    });


});
