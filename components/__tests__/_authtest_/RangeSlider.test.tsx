// import React from "react";
// import { render, fireEvent } from "@testing-library/react-native";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import RangeSlider, { RangeSliderProps } from "@/components/auth/RangeSlider";

// describe("RangeSlider", () => {
//   const defaultProps: RangeSliderProps = {
//     sliderWidth: 300,
//     min: 0,
//     max: 100,
//     step: 1,
//     onValueChange: jest.fn(),
//   };

//   it("renders correctly", () => {
//     const { getByTestId } = render(<RangeSlider {...defaultProps} />);

//     expect(getByTestId("sliderContainer")).toBeTruthy();
//     expect(getByTestId("thumb1")).toBeTruthy();
//     expect(getByTestId("thumb2")).toBeTruthy();
//   });

//   it("handles pan gesture correctly", () => {
//     const { getByTestId } = render(<RangeSlider {...defaultProps} />);

//     const thumb1 = getByTestId("thumb1");
//     const thumb2 = getByTestId("thumb2");

//     // Simulate pan gesture for thumb1
//     fireEvent(thumb1, "gestureHandlerStateChange", {
//       nativeEvent: { state: "began" },
//     });
//     fireEvent(thumb1, "gestureHandlerStateChange", {
//       nativeEvent: { state: "active", translationX: 50 },
//     });
//     fireEvent(thumb1, "gestureHandlerStateChange", {
//       nativeEvent: { state: "end" },
//     });

//     // Simulate pan gesture for thumb2
//     fireEvent(thumb2, "gestureHandlerStateChange", {
//       nativeEvent: { state: "began" },
//     });
//     fireEvent(thumb2, "gestureHandlerStateChange", {
//       nativeEvent: { state: "active", translationX: -50 },
//     });
//     fireEvent(thumb2, "gestureHandlerStateChange", {
//       nativeEvent: { state: "end" },
//     });

//     expect(defaultProps.onValueChange).toHaveBeenCalled();
//   });

//   it("updates thumb positions correctly", () => {
//     const { getByTestId } = render(<RangeSlider {...defaultProps} />);

//     const thumb1 = getByTestId("thumb1");
//     const thumb2 = getByTestId("thumb2");

//     // Simulate pan gesture for thumb1
//     fireEvent(thumb1, "gestureHandlerStateChange", {
//       nativeEvent: { state: "active", translationX: 100 },
//     });

//     // Simulate pan gesture for thumb2
//     fireEvent(thumb2, "gestureHandlerStateChange", {
//       nativeEvent: { state: "active", translationX: -100 },
//     });

//     // Check the new values
//     expect(thumb1.props.style.transform[0].translateX).toBeGreaterThan(0);
//     expect(thumb2.props.style.transform[0].translateX).toBeLessThan(
//       defaultProps.sliderWidth
//     );
//   });
// });
