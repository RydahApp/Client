import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import FormField from "@/components/auth/FormField";

// Mock the icons constant
jest.mock("@/constants", () => ({
  icons: {
    eyeSlashIcon: require("@/assets/icons/eyeSlashIcon.png"),
    eyeIcon: require("@/assets/icons/eyeIcon.png"),
  },
}));

describe("FormField Component", () => {
  it("renders correctly with given props", () => {
    const handleChangeText = jest.fn();

    const { getByTestId, getByPlaceholderText } = render(
      <FormField
        title="Test Title"
        type="text"
        titleShow={true}
        value="Test Value"
        placeholder="Test Placeholder"
        handleChangeText={handleChangeText}
        otherStyles=""
        errorClass=""
        keyboardType="default"
      />
    );

    // Check if the title is rendered
    expect(getByTestId("form-field")).toBeTruthy();
    // Check if the input is rendered with the correct placeholder
    expect(getByPlaceholderText("Test Placeholder")).toBeTruthy();
    // Check if the input has the correct value
    expect(getByTestId("text-input").props.value).toBe("Test Value");
  });

  it("toggles password visibility when icon is pressed", () => {
    const handleChangeText = jest.fn();

    const { getByTestId } = render(
      <FormField
        title="Test Title"
        type="Password"
        titleShow={true}
        value="Test Value"
        placeholder="Test Placeholder"
        handleChangeText={handleChangeText}
        otherStyles=""
        errorClass=""
        keyboardType="default"
      />
    );

    const passwordIcon = getByTestId("password-icon");
    const textInput = getByTestId("text-input");

    // Initially, the password should be hidden
    expect(textInput.props.secureTextEntry).toBe(true);

    // Toggle visibility
    fireEvent.press(passwordIcon);

    // Password should now be visible
    expect(textInput.props.secureTextEntry).toBe(false);

    // Toggle visibility again
    fireEvent.press(passwordIcon);

    // Password should now be hidden
    expect(textInput.props.secureTextEntry).toBe(true);
  });
});
