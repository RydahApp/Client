import NavHeader from "@/components/ui/NavHeader";
import { render, fireEvent } from "@testing-library/react-native";
import { router } from "expo-router";

jest.mock("expo-router", () => ({
  router: {
    push: jest.fn(),
  },
}));


describe("NavHeader Component", () => {
  it("navigates to notification screen on bell icon press", () => {
    const { getByTestId } = render(<NavHeader />);

    const bellButton = getByTestId("bell-button");
    fireEvent.press(bellButton);

    expect(router.push).toHaveBeenCalledWith("/notification/notify");
  });

  it("renders the heart icon", () => {
    const { getByTestId } = render(<NavHeader />);

    const heartButton = getByTestId("heart-button");
    fireEvent.press(heartButton);
    expect(router.push).toHaveBeenCalledWith("/myfavourites");
  });
});
