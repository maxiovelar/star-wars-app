import { fireEvent, render, screen } from "@testing-library/react";
import { Pagination, PaginationProps } from "./pagination";

describe("<Pagination />", () => {
  let props: PaginationProps;

  beforeEach(() => {
    props = {
      count: 30,
      collection: "planets",
    };
  });

  it("should render", () => {
    render(<Pagination {...props} />);
    expect(
      screen.getByTestId("pagination-button-decrease")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("pagination-button-increase")
    ).toBeInTheDocument();
  });

  it("should have the correct number of pages", () => {
    render(<Pagination {...props} />);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getAllByTestId("pagination-button")).toHaveLength(3);
  });

  it("should updates page number on click", () => {
    render(<Pagination {...props} />);
    const secondPageLink = screen.getByText("2");
    fireEvent.click(secondPageLink);
    expect(secondPageLink).toHaveClass("pagination__link--active");
    expect(secondPageLink).toHaveAttribute("href", "planets?page=2");
  });

  it("should disabled decrease button when page is 1", () => {
    render(<Pagination {...props} />);
    const firstPageLink = screen.getByText("1");
    fireEvent.click(firstPageLink);
    const decreaseButton = screen.getByTestId("pagination-button-decrease");
    expect(decreaseButton).toHaveClass("pagination__link--disabled");
  });

  it("should disabled increase button when page is 3", () => {
    render(<Pagination {...props} />);
    const lastPageLink = screen.getByText("3");
    fireEvent.click(lastPageLink);
    const increaseButton = screen.getByTestId("pagination-button-increase");
    expect(increaseButton).toHaveClass("pagination__link--disabled");
  });
});
