import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Page from "./page";
import React from "react";

// app/dashboard/page.test.jsx

// Mock fetch globally
beforeEach(() => {
  global.fetch = vi.fn();
});
afterEach(() => {
  vi.resetAllMocks();
});

const mockCountries = [
  {
    name: { common: "Colombia" },
    flags: { png: "colombia.png" },
    capital: ["Bogotá"],
    region: "Americas",
    population: 50000000,
  },
  {
    name: { common: "France" },
    flags: { png: "france.png" },
    capital: ["Paris"],
    region: "Europe",
    population: 67000000,
  },
];

describe("Page", () => {
  it("shows loading state initially", async () => {
    fetch.mockResolvedValueOnce({
      json: () => new Promise(() => {}),
    });
    render(<Page />);
    expect(screen.getByText(/Cargando países/i)).toBeInTheDocument();
  });

  it("renders country cards after fetch", async () => {
    fetch.mockResolvedValueOnce({
      json: async () => mockCountries,
    });
    render(<Page />);
    expect(await screen.findByText("Colombia")).toBeInTheDocument();
    expect(screen.getByText("France")).toBeInTheDocument();
    expect(screen.getByText("Bogotá")).toBeInTheDocument();
    expect(screen.getByText("Paris")).toBeInTheDocument();
  });

  it("filters countries by search input", async () => {
    fetch.mockResolvedValueOnce({
      json: async () => mockCountries,
    });
    render(<Page />);
    await screen.findByText("Colombia");
    const input = screen.getByPlaceholderText(/Search for a country/i);
    fireEvent.change(input, { target: { value: "fran" } });
    expect(screen.queryByText("Colombia")).not.toBeInTheDocument();
    expect(screen.getByText("France")).toBeInTheDocument();
  });

  it("filters countries by region select", async () => {
    fetch.mockResolvedValueOnce({
      json: async () => mockCountries,
    });
    render(<Page />);
    await screen.findByText("Colombia");
    const select = screen.getByLabelText(/Filter by Region/i) || screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "Europe" } });
    expect(screen.queryByText("Colombia")).not.toBeInTheDocument();
    expect(screen.getByText("France")).toBeInTheDocument();
  });

  it("shows 'No countries found' if filter matches nothing", async () => {
    fetch.mockResolvedValueOnce({
      json: async () => mockCountries,
    });
    render(<Page />);
    await screen.findByText("Colombia");
    const input = screen.getByPlaceholderText(/Search for a country/i);
    fireEvent.change(input, { target: { value: "xyz" } });
    expect(screen.getByText(/No countries found/i)).toBeInTheDocument();
  });

  it("handles fetch error gracefully", async () => {
    fetch.mockRejectedValueOnce(new Error("API error"));
    render(<Page />);
    expect(await screen.findByText(/Cargando países/i)).toBeInTheDocument();
    // After error, loading stays or nothing renders (depends on implementation)
  });
});