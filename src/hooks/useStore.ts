import { useReducer } from "react";

interface State {
  currentPage: number;
  isLoading: boolean;
}

type Action =
  | { type: "SET_CURRENT_PAGE"; payload: number }
  | { type: "SET_IS_LOADING"; payload: boolean };

// 1. Create a initialState object
const initialState: State = {
  currentPage: 1,
  isLoading: false,
};

// 2. Create a reducer function
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };

    case "SET_IS_LOADING":
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
