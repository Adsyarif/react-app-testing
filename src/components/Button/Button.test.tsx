import React from "react";
import { render, screen } from "@testing-library/react";
import Button from ".";
import "@testing-library/jest-dom/extend-expect";

describe("Unit Testing Button Component", () => {
  // Use render directly inside the test, not outside
  test("Expect Button Render Correctly", () => {
    // Render the component
    render(<Button />);

    // Use getByRole to check if a button is present
    const buttonElement = screen.getByRole("button");

    // Expect the button to be defined
    expect(buttonElement).toBeDefined();
  });

  test("Expect button to have right content", () => {
    // Render the component
    render(<Button />);

    // Use getByText or getByLabelText to check for specific content
    const testElement = screen.getByText("Ini Tombol");

    // Expect the element to be defined
    expect(testElement).toBeDefined();
  });
});
