import { type State, type Action } from "../../types";

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
