import { render } from "@testing-library/react";
import Providers from "./Providers";
import React from "react";

// Dummy child component to test rendering inside Providers
function DummyChild() {
  return <div data-testid="dummy-child">Child Content</div>;
}

describe("Providers", () => {
  it("renders children correctly", () => {
    const { getByTestId } = render(
      <Providers>
        <DummyChild />
      </Providers>
    );
    expect(getByTestId("dummy-child")).toBeInTheDocument();
    expect(getByTestId("dummy-child").textContent).toBe("Child Content");
  });
});