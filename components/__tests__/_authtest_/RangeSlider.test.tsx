import React from "react";
import { render } from "@testing-library/react-native";
import RangeSlider from "@/components/auth/RangeSlider";

describe("RangeSlider", () => {
  const sliderWidth = 300;
  const min = 0;
  const max = 100;
  const step = 1;
  const onValueChange = jest.fn();

  it("renders correctly", () => {
    const { getByTestId } = render(
      <RangeSlider
        sliderWidth={sliderWidth}
        min={min}
        max={max}
        step={step}
        onValueChange={onValueChange}
      />
    );
    expect(getByTestId("sliderContainer")).toBeTruthy();
    expect(getByTestId("thumb1")).toBeTruthy();
    expect(getByTestId("thumb2")).toBeTruthy();
  });
});