import { render, screen } from "@testing-library/react";
import Providers, { SomeContext } from "../components/providers";
import React, { useContext } from "react";
import Card from "./Card"; // Ajusta la ruta si tu componente Card está en otro lugar
import React from "react";

// app/providers.test.jsx

function ConsumerComponent() {
  const context = useContext(SomeContext);
  return <div>Value: {context.value}</div>;
}

describe("Card UI", () => {
  const mockCountry = {
    name: { common: "Colombia" },
    flags: { png: "https://flagcdn.com/co.png" },
    capital: ["Bogotá"],
    region: "Americas",
    population: 50000000,
  };

  it("renders country card with correct data", () => {
    render(<Card country={mockCountry} />);
    expect(screen.getByText("Colombia")).toBeInTheDocument();
    expect(screen.getByText(/Bogotá/)).toBeInTheDocument();
    expect(screen.getByText(/Americas/)).toBeInTheDocument();
    expect(screen.getByText(/50,000,000/)).toBeInTheDocument();
    const img = screen.getByAltText(/Colombia flag/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "https://flagcdn.com/co.png");
  });
});