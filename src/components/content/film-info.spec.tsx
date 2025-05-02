import { render, screen } from "@testing-library/react";
import { FilmInfo } from "./film-info";
import { type Film } from "../../../types";

describe("<FilmInfo />", () => {
  const mockFilm: Film = {
    title: "A New Hope",
    episode_id: 4,
    release_date: "1977-05-25",
    director: "George Lucas",
  };

  it("should render film information", () => {
    render(<FilmInfo item={mockFilm} />);

    expect(screen.getByText(/A New Hope/i)).toBeInTheDocument();
    expect(screen.getByText(/4/i)).toBeInTheDocument();
    expect(screen.getByText(/1977-05-25/i)).toBeInTheDocument();
    expect(screen.getByText(/George Lucas/i)).toBeInTheDocument();
  });
});
