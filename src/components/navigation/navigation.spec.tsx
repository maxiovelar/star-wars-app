import { fireEvent, render, screen } from "@testing-library/react";
import { Navigation } from "./navigation";
import * as hooks from "../../hooks/useViewportWidth";

describe("<Navigation />", () => {
  it("should render", () => {
    render(<Navigation />);
    expect(screen.getByTitle(/planets/i)).toBeInTheDocument();
    expect(screen.getByTitle(/starships/i)).toBeInTheDocument();
    expect(screen.getByTitle(/vehicles/i)).toBeInTheDocument();
    expect(screen.getByTitle(/people/i)).toBeInTheDocument();
    expect(screen.getByTitle(/species/i)).toBeInTheDocument();
    expect(screen.getByTitle(/films/i)).toBeInTheDocument();
  });

  it("should expand when clicked expand button", () => {
    const { container } = render(<Navigation />);
    const expandButton = screen.getByTestId("expand-button");
    expect(container.firstChild).not.toHaveClass("desktop--expanded");
    expect(expandButton).toHaveAttribute("title", "Expand");
    fireEvent.click(expandButton);
    expect(container.firstChild).toHaveClass("desktop--expanded");
    expect(expandButton).toHaveAttribute("title", "Collapse");
  });

  it("should render mobile navigation when viewport is mobile", () => {
    jest.spyOn(hooks, "useViewportWidth").mockReturnValue(768);
    const { container } = render(<Navigation />);
    expect(container.firstChild).toHaveClass("mobile");
  });
});
