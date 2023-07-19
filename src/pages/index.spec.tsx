import { render, screen, waitFor } from "@testing-library/react";
import Index from "../pages/index";

describe("<Index />", () => {
  it("should render", () => {
    render(<Index />);
    expect(screen.getByText(/collections/i)).toBeInTheDocument();
    expect(screen.getByText(/planets/i)).toBeInTheDocument();
    expect(screen.getByText(/spaceships/i)).toBeInTheDocument();
    expect(screen.getByText(/vehicles/i)).toBeInTheDocument();
    expect(screen.getByText(/films/i)).toBeInTheDocument();
    expect(screen.getByText(/people/i)).toBeInTheDocument();
    expect(screen.getByText(/species/i)).toBeInTheDocument();
  });

  it("should displays the correct number of collections", async () => {
    const collectionsAmount = 6;
    render(<Index />);
    await waitFor(() =>
      expect(screen.getAllByTestId("card")).toHaveLength(collectionsAmount)
    );
  });
});
