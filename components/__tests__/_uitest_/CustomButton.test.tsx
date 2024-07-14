import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CustomButton from "@/components/ui/CustomizeButton";

describe("CustomButton", () => {
  it("renders the button title", () => {
    const { getByText } = render(
      <CustomButton title="Test Button" containerStyles="bg-blue-500" />
    );

    expect(getByText("Test Button")).toBeTruthy();
  });

  it("calls the handlePress function when pressed", () => {
    const handlePress = jest.fn();
    const { getByRole } = render(
      <CustomButton title="Press Me" handlePress={handlePress} containerStyles="bg-blue-500" />
    );

    fireEvent.press(getByRole("button"));
    expect(handlePress).toHaveBeenCalledTimes(1);
  });

  it("displays the loading icon when isLoading is true", () => {
    const { getByRole } = render(
      <CustomButton title="Loading" isLoading={true} containerStyles="bg-blue-500" />
    );

    expect(getByRole("image")).toBeTruthy();
  });

  it("disables the button when disabled is true", () => {
    const { getByRole } = render(
      <CustomButton title="Disabled" disabled={true} containerStyles="bg-blue-500" />
    );

    expect(getByRole("button").props.accessibilityState.disabled).toBe(true);
  });

  it("disables the button when isLoading is true", () => {
    const { getByRole } = render(
      <CustomButton title="Loading" isLoading={true} containerStyles="bg-blue-500" />
    );

    expect(getByRole("button").props.accessibilityState.disabled).toBe(true);
  });
});
