import React from "react";
import { render } from "@testing-library/react-native";
import StarRate from "@/components/ui/StarRate"; // Adjust this import path as needed

describe("StarRate Component", () => {
  it("renders the correct number of stars based on totalStar", () => {
    const { toJSON } = render(
      <StarRate starIndex={2} totalStar={5} />
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it("renders stars with the correct color based on starIndex", () => {
    const { toJSON } = render(
      <StarRate starIndex={3} totalStar={5} />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
