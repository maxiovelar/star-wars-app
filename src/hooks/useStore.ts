import { useReducer } from "react";

interface State {
  isExpanded: boolean;
  isLoading: boolean;
  theme: "light" | "dark";
}

export type Action =
  | { type: "SET_IS_EXPANDED"; payload: boolean }
  | { type: "SET_IS_LOADING"; payload: boolean }
  | { type: "SET_THEME"; payload: "light" | "dark" };

const initialState: State = {
  isExpanded: false,
  isLoading: false,
  theme: "light",
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_IS_EXPANDED":
      return { ...state, isExpanded: action.payload };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_THEME":
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export const useStore = () => {
  const [{ isExpanded, isLoading, theme }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const setIsExpanded = (payload: boolean) => {
    dispatch({ type: "SET_IS_EXPANDED", payload });
  };

  const setIsLoading = (payload: boolean) => {
    dispatch({ type: "SET_IS_LOADING", payload });
  };

  const setTheme = (payload: "light" | "dark") => {
    dispatch({ type: "SET_THEME", payload });
  };

  return {
    isExpanded,
    isLoading,
    theme,
    setIsExpanded,
    setIsLoading,
    setTheme,
  };
};
