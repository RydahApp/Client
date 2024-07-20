import NavHeader from "@/components/ui/NavHeader";
import { render, fireEvent } from "@testing-library/react-native";
import { router } from "expo-router";

jest.mock("expo-router", () => ({
  router: {
    push: jest.fn(),
  },
}));

jest.mock("@/constants", () => ({
  icons: {
    avatarIcon: "@/assets/icons/avatarIcon.png",
  },
}));

describe("NavHeader Component", () => {
  it("renders correctly", () => {
    const { getByText, getByTestId } = render(<NavHeader />);

    expect(getByText("Aisha Uthman")).toBeTruthy();
    expect(getByText("Aisha Ventures")).toBeTruthy();
    expect(getByTestId("profile-avatar")).toBeTruthy();
  });

  it("navigates to notification screen on bell icon press", () => {
    const { getByTestId } = render(<NavHeader />);

    const bellButton = getByTestId("bell-button");
    fireEvent.press(bellButton);

    expect(router.push).toHaveBeenCalledWith("/notification/notify");
  });

  it("renders the heart icon", () => {
    const { getByTestId } = render(<NavHeader />);

    const heartButton = getByTestId("heart-button");
    expect(heartButton).toBeTruthy();
  });
});
