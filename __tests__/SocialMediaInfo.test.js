import React from "react";
import '@testing-library/jest-dom';
import {render} from "@testing-library/react";
import SocialMediaInfo from '../src/components/SocialMediaInfo/SocialMediaInfo';

describe('Social Media Info Component', () => {
    test('should render the Social Media Info component', () => {
        const {getByLabelText} = render(<SocialMediaInfo />);
        const socialMediaInfo = getByLabelText('Social Media Links');
        expect(socialMediaInfo).toBeInTheDocument();
    })
});