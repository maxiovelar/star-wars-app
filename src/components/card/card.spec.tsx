import { render, screen } from "@testing-library/react";
import { Card } from "./card";
import { type CardProps } from "../../../types";

describe("<Card />", () => {
  let props: CardProps;

  beforeEach(() => {
    props = {
      image: "/assets/planets/alderaan.webp",
      children: "irrelevant children",
    };
  });

  it("should render", () => {
    render(<Card {...props} />);
    expect(screen.getByText("irrelevant children")).not.toBeNull();
    expect(screen.getByTestId("card-image")).toBeInTheDocument();
  });
});
