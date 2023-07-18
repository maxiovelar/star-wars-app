import { render, screen } from "@testing-library/react";
import { Layout, LayoutProps } from "./layout";

describe("<Layout />", () => {
  let props: LayoutProps;

  beforeEach(() => {
    props = { children: "irrelevant children" };
  });

  it("should render", () => {
    render(<Layout {...props} />);
    expect(screen.getByTestId("navigation")).toBeInTheDocument();
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByText("irrelevant children")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
