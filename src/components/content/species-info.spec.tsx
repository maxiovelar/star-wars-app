import { render, screen } from "@testing-library/react";
import { SpeciesInfo } from "./species-info";
import { type Species } from "../../../types";

describe("<SpeciesInfo />", () => {
  const mockSpecies: Species = {
    name: "Wookiee",
    classification: "mammal",
    designation: "sentient",
    language: "Shyriiwook",
  };

  it("should render species information", () => {
    render(<SpeciesInfo item={mockSpecies} />);

    expect(screen.getByText(/Wookiee/i)).toBeInTheDocument();
    expect(screen.getByText(/mammal/i)).toBeInTheDocument();
    expect(screen.getByText(/sentient/i)).toBeInTheDocument();
    expect(screen.getByText(/Shyriiwook/i)).toBeInTheDocument();
  });
});
