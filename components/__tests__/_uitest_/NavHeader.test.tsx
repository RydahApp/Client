import NavHeader from "@/components/ui/NavHeader";
import renderer from "react-test-renderer";
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

describe("<NavHeader />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<NavHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("has the correct number of children", () => {
    const tree = renderer.create(<NavHeader />).toJSON();

    // Ensure tree is not null and is a single object (not an array)
    if (tree && !Array.isArray(tree) && "children" in tree) {
      expect(tree.children?.length).toBe(2); // Adjust the expected number based on your component's structure
    } else {
      // Fail the test if the structure is unexpected
      throw new Error("Tree structure is not as expected");
    }
  });
});
