import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { formatNGNCurrency } from "@/helpers";
import { Product } from "@/types";
import ProductItem from "@/components/shop/ProductItem";

// Mock the router module
jest.mock("expo-router", () => ({
  router: {
    push: jest.fn(),
  },
}));

// Sample product data
const sampleProduct: Product = {
  id: "test-slug",
  title: "Test Product Title That Is Long",
  price: 1234.56,
  product_image: require("@/path/to/mock-image.png"), // Replace with your mock image path
};

describe("ProductItem Component", () => {
  it("renders correctly with given props", () => {
    const { getByText, getByRole } = render(
      <ProductItem data={sampleProduct} />
    );

    // Check if the title is rendered correctly
    expect(getByText(sampleProduct.title.substring(0, 18))).toBeTruthy();

    // Check if the price is formatted correctly
    expect(getByText(formatNGNCurrency(sampleProduct.price))).toBeTruthy();

    // Check if the image is rendered
    expect(getByRole("image")).toBeTruthy();
  });

  it("navigates to the correct detail page when image is pressed", () => {
    const { getByRole } = render(<ProductItem data={sampleProduct} />);

    // Mock function for navigation
    const { push } = require("expo-router").router;

    // Find the image element and simulate press event
    const imageElement = getByRole("image");
    fireEvent.press(imageElement);

    // Check if the router push function is called with the correct slug
    expect(push).toHaveBeenCalledWith(`/product/${sampleProduct.id}`);
  });

  it("renders the heart icon", () => {
    const { getByRole } = render(<ProductItem data={sampleProduct} />);

    // Check if the heart icon is rendered
    expect(getByRole("button")).toBeTruthy();
  });
});
