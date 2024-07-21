import React from "react";
import { render } from "@testing-library/react-native";
import Topheader from "@/components/auth/Topheader";

// Mock the images constant
jest.mock("@/constants", () => ({
  images: {
    rydahLogo: require("@/assets/images/rydahLogo.png"),
  },
}));

describe("Topheader Component", () => {
  it("renders correctly with given props", () => {
    const { getByText, getByTestId } = render(
      <Topheader subtitle="Test Subtitle" title="Test Title" />
    );

    // Check if the subtitle and title are rendered correctly
    expect(getByText("Test Subtitle")).toBeTruthy();
    expect(getByText("Test Title")).toBeTruthy();

    // Check if the image is rendered with the correct testID
    expect(getByTestId("rydah-logo")).toBeTruthy();
  });
});
