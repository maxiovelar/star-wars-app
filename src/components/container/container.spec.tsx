import { render } from "@testing-library/react";
import { Container } from "./container";
import { type ContainerProps } from "../../../types";

describe("<Container />", () => {
  let props: ContainerProps;

  props = {
    children: "irrelevant children",
  };

  it("should render", () => {
    const { container } = render(<Container {...props} />);
    expect(container).toMatchInlineSnapshot(`
<div>
  <div
    class="container"
  >
    irrelevant children
  </div>
</div>
`);
  });
});
