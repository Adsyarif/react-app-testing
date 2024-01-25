import React from "react";
import { render, screen } from "@testing-library/react";
import Text from ".";
import "@testing-library/jest-dom/extend-expect";

describe("Unit Testing text Component", () => {
  // Use render directly inside the test, not outside
  test("Expect Text Render Correctly", () => {
    const document = render(<Text>{"text unit testing"}</Text>);
    expect(document).toMatchSnapshot();
  });

  test("Expect button to have right content", () => {
    // Render the component
    render(<Text>{"text unit testing"}</Text>);

    // Use getByText or getByLabelText to check for specific content
    const testElement = screen.getByText("text unit testing");

    // Expect the element to be defined
    expect(testElement).toBeDefined();
  });

  test("Expect button to have right id", () => {
    // Render the component
    render(<Text id="testing">{"text unit testing"}</Text>);

    // Use getByText or getByLabelText to check for specific content
    const testElement = screen.getByText("text unit testing");

    // Expect the element to be defined
    expect(testElement).toHaveAttribute("id", "testing");
  });
  test("Expect button to have right class name", () => {
    // Render the component
    render(<Text clasName="class-testing">{"text unit testing"}</Text>);

    // Use getByText or getByLabelText to check for specific content
    const testElement = screen.getByText("text unit testing");

    // Expect the element to be defined
    expect(testElement).toHaveClass("class-testing");
  });
});
