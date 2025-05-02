import { render, screen, fireEvent } from "@testing-library/react";
import { Pagination } from "./pagination";
import { useStore } from "../../hooks/useStore";

jest.mock("../../hooks/useStore");

describe("<Pagination />", () => {
  const mockSetCurrentPage = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useStore as jest.Mock).mockReturnValue({
      currentPage: 1,
      setCurrentPage: mockSetCurrentPage,
    });
  });

  it("should render pagination buttons", () => {
    render(<Pagination count={30} collection="planets" />);

    expect(screen.getByTestId("pagination-button-decrease")).toBeInTheDocument();
    expect(screen.getByTestId("pagination-button-increase")).toBeInTheDocument();
    expect(screen.getAllByTestId("pagination-button").length).toBe(3); // 30 items / 10 per page = 3 pages
  });

  it("should call setCurrentPage with the correct value when a page button is clicked", () => {
    render(<Pagination count={30} collection="planets" />);

    const pageButtons = screen.getAllByTestId("pagination-button");
    fireEvent.click(pageButtons[1]); // Click on the second page button

    expect(mockSetCurrentPage).toHaveBeenCalledWith(2);
  });

  it("should disable the decrease button on the first page", () => {
    render(<Pagination count={30} collection="planets" />);

    const decreaseButton = screen.getByTestId("pagination-button-decrease");
    expect(decreaseButton).toHaveClass("pagination__link--disabled");
  });

  it("should disable the increase button on the last page", () => {
    (useStore as jest.Mock).mockReturnValue({
      currentPage: 3,
      setCurrentPage: mockSetCurrentPage,
    });

    render(<Pagination count={30} collection="planets" />);

    const increaseButton = screen.getByTestId("pagination-button-increase");
    expect(increaseButton).toHaveClass("pagination__link--disabled");
  });

  it("should call setCurrentPage with the correct value when decrease button is clicked", () => {
    (useStore as jest.Mock).mockReturnValue({
      currentPage: 2,
      setCurrentPage: mockSetCurrentPage,
    });

    render(<Pagination count={30} collection="planets" />);

    const decreaseButton = screen.getByTestId("pagination-button-decrease");
    fireEvent.click(decreaseButton);

    expect(mockSetCurrentPage).toHaveBeenCalledWith(1);
  });

  it("should call setCurrentPage with the correct value when increase button is clicked", () => {
    render(<Pagination count={30} collection="planets" />);

    const increaseButton = screen.getByTestId("pagination-button-increase");
    fireEvent.click(increaseButton);

    expect(mockSetCurrentPage).toHaveBeenCalledWith(2);
  });
});