import { render, screen } from "@testing-library/react";
import { PlanetInfo } from "./planet-info";
import { type Planet } from "../../../types";

describe("<PlanetInfo />", () => {
  const mockPlanet: Planet = {
    name: "Tatooine",
    diameter: "10465",
    climate: "arid",
    population: "200000",
  };

  it("should render planet information", () => {
    render(<PlanetInfo item={mockPlanet} />);

    expect(screen.getByText(/Tatooine/i)).toBeInTheDocument();
    expect(screen.getByText(/10465/i)).toBeInTheDocument();
    expect(screen.getByText(/arid/i)).toBeInTheDocument();
    expect(screen.getByText(/200000/i)).toBeInTheDocument();
  });
});
