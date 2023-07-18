import { render, screen } from "@testing-library/react";
import { Pagination, PaginationProps } from "./pagination";

describe("<Pagination />", () => {
  let props: PaginationProps;

  beforeEach(() => {
    props = {
      count: 30,
      page: 1,
      setPage: jest.fn(),
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
  });

  it("should call setPage when clicking on a page", () => {
    render(<Pagination {...props} />);
    screen.getByText("1").click();
    screen.getByText("2").click();
    screen.getByText("3").click();
    expect(props.setPage).toHaveBeenCalledTimes(3);
  });

  it("should not call setPage when clicking on a disabled button", () => {
    render(<Pagination {...props} />);
    const decreaseButton = screen.getByTestId("pagination-button-decrease");
    expect(decreaseButton).toHaveAttribute("disabled");
    decreaseButton.click();
    expect(props.setPage).not.toHaveBeenCalled();
  });
});
