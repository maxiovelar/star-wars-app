import { render } from "@testing-library/react";
import { Container, ContainerProps } from "./container";

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
