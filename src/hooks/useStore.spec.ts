import { act, renderHook } from "@testing-library/react";
import { Action, State, reducer, useStore } from "./useStore";

describe("reducer", () => {
  it("should set currentPage", () => {
    const initialState: State = { currentPage: 1, isLoading: false };
    const action: Action = { type: "SET_CURRENT_PAGE", payload: 2 };
    const result = reducer(initialState, action);
    expect(result).toEqual({ currentPage: 2, isLoading: false });
  });

  it("should set isLoading", () => {
    const initialState: State = { currentPage: 1, isLoading: false };
    const action: Action = { type: "SET_IS_LOADING", payload: true };
    const result = reducer(initialState, action);
    expect(result).toEqual({ currentPage: 1, isLoading: true });
  });

  it("should return state when negative number is passed", () => {
    const initialState: State = { currentPage: 1, isLoading: false };
    const action: Action = { type: "SET_CURRENT_PAGE", payload: -1 };
    const result = reducer(initialState, action);
    expect(result).toEqual(initialState);
  });
});

describe("useStore", () => {
  it("should have a correct initialState", () => {
    const { result } = renderHook(() => useStore());
    expect(result.current.currentPage).toBe(1);
    expect(result.current.isLoading).toBe(false);
  });

  it("should set currentPage", () => {
    const { result } = renderHook(() => useStore());
    act(() => {
      result.current.setCurrentPage(2);
    });
    expect(result.current.currentPage).toBe(2);
  });

  it("should set isLoading", () => {
    const { result } = renderHook(() => useStore());
    act(() => {
      result.current.setIsLoading(true);
    });
    expect(result.current.isLoading).toBe(true);
  });
});
