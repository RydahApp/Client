import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Text } from "react-native";
import ModalPopUp from "@/components/ui/ModalPopUp";

describe("ModalPopUp component", () => {
  it("renders correctly when visible is true", () => {
    const { getByText, queryByText } = render(
      <ModalPopUp visible={true}>
        <Text>Modal Content</Text>
      </ModalPopUp>
    );

    expect(getByText("Modal Content")).toBeTruthy();
    expect(queryByText("Modal Content")).not.toBeNull();
  });

  it("does not render when visible is false", () => {
    const { queryByText } = render(
      <ModalPopUp visible={false}>
        <Text>Modal Content</Text>
      </ModalPopUp>
    );

    expect(queryByText("Modal Content")).toBeNull();
  });

  it("renders and toggles the modal visibility correctly", () => {
    const { rerender, getByText, queryByText } = render(
      <ModalPopUp visible={false}>
        <Text>Modal Content</Text>
      </ModalPopUp>
    );

    expect(queryByText("Modal Content")).toBeNull();

    rerender(
      <ModalPopUp visible={true}>
        <Text>Modal Content</Text>
      </ModalPopUp>
    );

    expect(getByText("Modal Content")).toBeTruthy();

    rerender(
      <ModalPopUp visible={false}>
        <Text>Modal Content</Text>
      </ModalPopUp>
    );

    expect(queryByText("Modal Content")).toBeNull();
  });
});
