import { useReducer } from "react";

export interface State {
  currentPage: number;
  isLoading: boolean;
}

export type Action =
  | { type: "SET_CURRENT_PAGE"; payload: number }
  | { type: "SET_IS_LOADING"; payload: boolean };

// 1. Create a initialState object
const initialState: State = {
  currentPage: 1,
  isLoading: false,
};

// 2. Create a reducer function
export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_CURRENT_PAGE":
      if (typeof action.payload !== "number" || action.payload < 0)
        return state;
      return { ...state, currentPage: action.payload };

    case "SET_IS_LOADING":
      if (typeof action.payload !== "boolean") return state;
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};

export const useStore = () => {
  // 3. Create a useReducer hook
  const [{ currentPage, isLoading }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const setCurrentPage = (payload: number) => {
    dispatch({ type: "SET_CURRENT_PAGE", payload });
  };

  const setIsLoading = (payload: boolean) => {
    dispatch({ type: "SET_IS_LOADING", payload });
  };

  return {
    currentPage,
    isLoading,
    setCurrentPage,
    setIsLoading,
  };
};
