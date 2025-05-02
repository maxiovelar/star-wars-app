import { renderHook, act } from "@testing-library/react";
import { useStore } from "./useStore";
import { useContext } from "react";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

describe("useStore", () => {
  const mockDispatch = jest.fn();
  const mockState = {
    currentPage: 1,
    isLoading: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useContext as jest.Mock).mockReturnValue({
      state: mockState,
      dispatch: mockDispatch,
    });
  });

  it("should return the current state values", () => {
    const { result } = renderHook(() => useStore());

    expect(result.current.currentPage).toBe(mockState.currentPage);
    expect(result.current.isLoading).toBe(mockState.isLoading);
  });

  it("should dispatch SET_CURRENT_PAGE action", () => {
    const { result } = renderHook(() => useStore());

    act(() => {
      result.current.setCurrentPage(2);
    });

    expect(mockDispatch).toHaveBeenCalledWith({ type: "SET_CURRENT_PAGE", payload: 2 });
  });

  it("should dispatch SET_IS_LOADING action", () => {
    const { result } = renderHook(() => useStore());

    act(() => {
      result.current.setIsLoading(true);
    });

    expect(mockDispatch).toHaveBeenCalledWith({ type: "SET_IS_LOADING", payload: true });
  });
});