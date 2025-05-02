import { render, screen } from "@testing-library/react";
import { PersonInfo } from "./person-info";
import { type Person } from "../../../types";

describe("<PersonInfo />", () => {
  const mockPerson: Person = {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    gender: "male",
  };

  it("should render person information", () => {
    render(<PersonInfo item={mockPerson} />);

    expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
    expect(screen.getByText(/172/i)).toBeInTheDocument();
    expect(screen.getByText(/77/i)).toBeInTheDocument();
    expect(screen.getByText(/male/i)).toBeInTheDocument();
  });
});
