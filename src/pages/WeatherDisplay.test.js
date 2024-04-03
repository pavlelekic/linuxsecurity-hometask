import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import WeatherDisplay from "./WeatherDisplay";

describe("WeatherDisplay", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            main: { temp: 15, humidity: 70 },
            weather: [{ description: "Cloudy" }],
            name: "Paris",
          }),
      })
    );
  });

  it("renders loading state initially", () => {
    render(<WeatherDisplay />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("fetches data and renders weather information", async () => {
    render(<WeatherDisplay />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitFor(() => screen.getByText("Cloudy"));
    expect(screen.getByText("15 °C")).toBeInTheDocument();
    expect(screen.getByText("Humidity: 70%")).toBeInTheDocument();
    expect(screen.getByText("Paris")).toBeInTheDocument();
  });

  it("displays error message if data fetching fails", async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error("Failed to fetch")));

    render(<WeatherDisplay />);

    await screen.findByText("Failed to fetch");
  });

  afterAll(() => {
    global.fetch.mockRestore();
  });
});
