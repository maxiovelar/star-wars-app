import { act, renderHook } from "@testing-library/react";
import { useViewportWidth } from "./useViewportWidth";

describe("useViewportWidth", () => {
  it("should return viewport width", () => {
    const { result } = renderHook(() => useViewportWidth());
    expect(result.current).toBe(window.innerWidth);
  });

  it("should update viewport width on window resize", () => {
    const { result } = renderHook(() => useViewportWidth());
    act(() => {
      window.innerWidth = 500;
      window.dispatchEvent(new Event("resize"));
    });
    expect(result.current).toBe(500);
  });
});
