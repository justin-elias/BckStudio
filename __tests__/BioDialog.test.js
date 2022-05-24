import BioDialog from "../src/components/BioDialog/BioDialog";
import {render} from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom/extend-expect';

const instructorMock =
{
  "instructor": {
    "firstName": "BCK Staff",
    "lastName": "Default Instructor",
    "headshotImage": {
      "url": "https://media.graphassets.com/NjGnfUyoSbCSqYBBH822"
    },
    "bio": {
      "text": "One of our outstanding staff members will be teaching this class"
    },
    "instructorStatement": {
      "text": "At our core, artists are communicators. Here at Bozeman Community Kiln, our goal as instructors is to teach each student how to tell their own stories through ceramic creations\n"
    }
  }
}
describe("BioDialog", () => {
    test("should render the BioDialog component", () => {
        const {getByLabelText} = render(<BioDialog defaultInstructor={instructorMock}/>);
        expect(getByLabelText("Instructor Bio")).toBeInTheDocument()
    })
})