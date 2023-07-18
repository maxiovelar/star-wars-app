import { render, screen } from "@testing-library/react";
import { Footer } from "./footer";

describe("<Footer />", () => {
  it("should render", () => {
    const { getByTestId } = render(<Footer />);
    const footer = getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });

  it("test render links", () => {
    render(<Footer />);
    const linkedinIcon = screen.getByTestId("linkedin-link");
    const githubIcon = screen.getByTestId("github-link");
    const swapiLink = screen.getByTestId("swapi-link");
    expect(linkedinIcon).toBeInTheDocument();
    expect(linkedinIcon).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/maximiliano-ovelar/"
    );
    expect(githubIcon).toBeInTheDocument();
    expect(githubIcon).toHaveAttribute("href", "https://github.com/maxiovelar");
    expect(swapiLink).toBeInTheDocument();
    expect(swapiLink).toHaveAttribute("href", "https://swapi.dev/");
  });

  it("test displayed year", () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date(2021, 1, 2));
    render(<Footer />);
    const currentYear = screen.getByTestId("current-year");
    expect(currentYear).toBeInTheDocument();
    expect(currentYear).toHaveTextContent("2021");
  });
});
