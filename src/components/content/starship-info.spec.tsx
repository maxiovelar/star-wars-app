import { render, screen } from "@testing-library/react";
import { StarshipInfo } from "./starship-info";
import { type Starship } from "../../../types";

describe("<StarshipInfo />", () => {
  const mockStarship: Starship = {
    name: "Millennium Falcon",
    starship_class: "Light freighter",
  };

  it("should render starship information", () => {
    render(<StarshipInfo item={mockStarship} />);

    expect(screen.getByText(/Millennium Falcon/i)).toBeInTheDocument();
    expect(screen.getByText(/Light freighter/i)).toBeInTheDocument();
  });
});
