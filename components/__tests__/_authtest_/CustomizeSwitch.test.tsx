import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CustomizeSwitch from "@/components/auth/CustomizeSwitch";
import { StyleSheet } from "react-native";

describe("CustomizeSwitch Component", () => {
//   it("applies the correct styles when isOn is true", () => {
//     const { getByTestId } = render(
//       <CustomizeSwitch isOn={true} onToggle={() => {}} />
//     );

//     const switchElement = getByTestId("custom-switch");
//     const switchStyle = switchElement.props.style[0]; // Primary style object applied to TouchableOpacity

//     // Flatten the style to simplify the comparison
//     const flattenedStyle = StyleSheet.flatten(switchStyle));

//     expect(flattenedStyle.backgroundColor).toBe("#000000");
//   });

  it("calls onToggle when pressed", () => {
    const mockToggle = jest.fn();
    const { getByTestId } = render(
      <CustomizeSwitch isOn={true} onToggle={mockToggle} />
    );

    const switchElement = getByTestId("custom-switch");
    fireEvent.press(switchElement);
    expect(mockToggle).toHaveBeenCalledTimes(1);
  });
});
