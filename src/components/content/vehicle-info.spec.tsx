import { render, screen } from "@testing-library/react";
import { VehicleInfo } from "./vehicle-info";
import { type Vehicle } from "../../../types";

describe("<VehicleInfo />", () => {
  const mockVehicle: Vehicle = {
    name: "Sand Crawler",
    vehicle_class: "wheeled",
  };

  it("should render vehicle information", () => {
    render(<VehicleInfo item={mockVehicle} />);

    expect(screen.getByText(/Sand Crawler/i)).toBeInTheDocument();
    expect(screen.getByText(/wheeled/i)).toBeInTheDocument();
  });
});
